import {
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { hooks } from "../connectors/metamask";
import { useNavigate } from "react-router-dom";
import { toAscii } from "idna-uts46-hx";
import { hash } from "@ensdomains/eth-ens-namehash";
import isValidDomain from "is-valid-domain";
import Loader from "../components/Loader";
import KinodeHeader from "../components/KnsHeader";
import { PageProps } from "../lib/types";
import { generateNetworkingKeys, getNetworkName } from "../utils/chain";
import { Tooltip } from "../components/Tooltip";
import DirectCheckbox from "../components/DirectCheckbox";
import EnterKnsName from "../components/EnterKnsName";
import { KinodeTitle } from "../components/KinodeTitle";
import { namehash } from "@ethersproject/hash";

const NAME_INVALID_PUNY = "Unsupported punycode character";
const NAME_NOT_OWNER = "Name does not belong to this wallet";
const NAME_NOT_REGISTERED = "Name is not registered";
const NAME_URL =
  "Name must be a valid URL without subdomains (A-Z, a-z, 0-9, and punycode)";

const { useAccounts, useProvider } = hooks;

interface ResetProps extends PageProps { }

function Reset({
  direct,
  setDirect,
  setReset,
  knsName,
  setOsName,
  dotOs,
  kns,
  openConnect,
  closeConnect,
  setNetworkingKey,
  setIpAddress,
  setWsPort,
  setTcpPort,
  setRouters,
  nodeChainId,
}: ResetProps) {
  const accounts = useAccounts();
  const provider = useProvider();
  const navigate = useNavigate();

  const chainName = getNetworkName(nodeChainId);
  const [name, setName] = useState<string>(knsName.slice(0, -3));
  const [nameVets, setNameVets] = useState<string[]>([]);
  const [nameValidities, setNameValidities] = useState<string[]>([])
  const [loading, setLoading] = useState<string>("");

  const [triggerNameCheck, setTriggerNameCheck] = useState<boolean>(false);

  useEffect(() => {
    document.title = "Reset";
  }, []);

  // so inputs will validate once wallet is connected
  useEffect(() => setTriggerNameCheck(!triggerNameCheck), [provider]); // eslint-disable-line react-hooks/exhaustive-deps

  const nameDebouncer = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (nameDebouncer.current) clearTimeout(nameDebouncer.current);

    nameDebouncer.current = setTimeout(async () => {
      setNameVets([]);

      if (!provider) return;

      if (name === "") return;

      let index: number;
      let vets = [...nameVets];

      let normalized: string;
      index = vets.indexOf(NAME_INVALID_PUNY);
      try {
        normalized = toAscii(name + ".os");
        if (index !== -1) vets.splice(index, 1);
      } catch (e) {
        if (index === -1) vets.push(NAME_INVALID_PUNY);
      }

      // only check if name is valid punycode
      if (normalized! !== undefined) {
        index = vets.indexOf(NAME_URL);
        if (name !== "" && !isValidDomain(normalized)) {
          if (index === -1) vets.push(NAME_URL);
        } else if (index !== -1) vets.splice(index, 1);

        try {
          const owner = await dotOs?.ownerOf(hash(normalized));

          index = vets.indexOf(NAME_NOT_OWNER);
          if (owner === accounts![0] && index !== -1) vets.splice(index, 1);
          else if (index === -1 && owner !== accounts![0])
            vets.push(NAME_NOT_OWNER);

          index = vets.indexOf(NAME_NOT_REGISTERED);
          if (index !== -1) vets.splice(index, 1);
        } catch (e) {
          index = vets.indexOf(NAME_NOT_REGISTERED);
          if (index === -1) vets.push(NAME_NOT_REGISTERED);
        }

        if (nameVets.length === 0) setOsName(normalized);
      }

      setNameVets(vets);
    }, 500);
  }, [name, triggerNameCheck]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleResetRecords = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (!provider || !kns) return openConnect();

      setLoading("Please confirm the transaction in your wallet");
      try {
        const nameToSet = namehash(knsName);
        const data = await generateNetworkingKeys({
          direct,
          kns,
          nodeChainId,
          chainName,
          nameToSet,
          setNetworkingKey,
          setIpAddress,
          setWsPort,
          setTcpPort,
          setRouters,
        });

        const tx = await kns.multicall(data);

        setLoading("Resetting Networking Information...");

        await tx.wait();

        setReset(true);
        setDirect(direct);
        navigate("/set-password");
      } catch {
        alert("An error occurred, please try again.");
      } finally {
        setLoading("");
      }
    },
    [
      provider,
      knsName,
      setReset,
      setDirect,
      navigate,
      openConnect,
      kns,
      direct,
      setNetworkingKey,
      setIpAddress,
      setWsPort,
      setTcpPort,
      setRouters,
      nodeChainId,
      chainName,
    ]
  );

  return (
    <>
      <KinodeHeader header={<KinodeTitle prefix="Reset KNS Name" />}
        openConnect={openConnect}
        closeConnect={closeConnect}
        nodeChainId={nodeChainId}
      />
      {Boolean(provider) && (
        <form id="signup-form" className="flex flex-col" onSubmit={handleResetRecords}>
          {loading ? (
            <Loader msg={loading} />
          ) : (
            <>
              <h3 className="flex flex-col w-full place-items-center mb-2">
                <label className="flex leading-6 place-items-center mt-2 cursor-pointer mb-2">
                  Choose a name for your kinode
                  <Tooltip text={`Kinodes use a .os name in order to identify themselves to other nodes in the network.`} />
                </label>
                <EnterKnsName {...{ name, setName, nameVets, dotOs, triggerNameCheck, nameValidities, setNameValidities, isReset: true }} />
              </h3>

              <DirectCheckbox {...{ direct, setDirect }} />

              <button type="submit" className="mt-2"> Reset Node </button>
            </>
          )}
        </form>
      )}
    </>
  );
}

export default Reset;

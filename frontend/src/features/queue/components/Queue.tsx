import Action from "./Action";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../components/ui/Spinner";
import getQueue from "../api/getQueue";
import { useActionTypeLoadingContext } from "../../../hooks/useActionTypeLoading";

export default function Queue() {
  const {
    data: queue,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["queue"],
    queryFn: getQueue,
    refetchInterval: 5 * 1000,
  });

  const { isPending } = useActionTypeLoadingContext();

  return (
    <div className="flex flex-col items-center space-y-2 mt-8 mb-8">
      <div className="relative text-center w-80">
        <h2 className="text-2xl font-bold mb-2">{`File d'attente ${
          queue?.length === 0 && !isError ? "vide" : ""
        }`}</h2>
        {isPending && <Spinner className="p-1 absolute -top-1 right-0" />}
      </div>
      {isLoading && <Spinner className="my-16" />}
      {isError && (
        <p className="text-center text-red-500">
          Erreur lors du chargement de la file
        </p>
      )}
      {!isError && !isLoading && queue?.length !== 0 && (
        <ul className="list-none flex flex-wrap justify-center gap-2">
          <li key="arrow-1" className="text-2xl text-gray-800 p-2">
            {"Prochaine action : "}
          </li>
          {queue?.map((action, index) => (
            <Action type={action} index={index} />
          ))}
        </ul>
      )}
    </div>
  );
}

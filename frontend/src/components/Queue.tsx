import { baseUrl } from "../api/config";
import Action from "./Action";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./ui/Spinner";

async function getQueue(): Promise<string[]> {
  const queueData = await fetch(`${baseUrl}/queue`);
  return queueData.json();
}

export default function Queue() {
  const {
    data: queue,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["queue"],
    queryFn: getQueue,
    refetchInterval: 5 * 1000,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return (
      <p className="text-center text-red-500">
        Erreur lors du chargement de la file
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-2 mt-8 mb-8">
      <h2 className="text-2xl font-bold mb-2">{`File d'attente ${
        queue?.length === 0 ? "vide" : ""
      }`}</h2>
      {queue?.length !== 0 && (
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

import { useQuery } from "@tanstack/react-query";
import getExecutionTime from "../api/getExecutionTime";
import Spinner from "../../../components/ui/Spinner";
import formatTime from "../../../utils/formatTimeExecution";

export default function ExecutionTime() {
  const {
    data: time,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["executionTime"],
    queryFn: getExecutionTime,
  });

  return (
    <div>
      {isLoading && <Spinner />}
      {isError && (
        <p className="text-center text-red-500">
          Erreur lors du chargement du temps d'exécution
        </p>
      )}
      {time && (
        <p>{`Temps avant éxécution : ${formatTime(time?.time * 1000)}`}</p>
      )}
    </div>
  );
}

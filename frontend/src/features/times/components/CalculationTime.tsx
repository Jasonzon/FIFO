import { useQuery } from "@tanstack/react-query";
import getCalculationTime from "../api/getCalculationTime";
import Spinner from "../../../components/ui/Spinner";
import formatTime from "../../../utils/formatTimeCalculation";

export default function CalculationTime() {
  const {
    data: time,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["calculationTime"],
    queryFn: getCalculationTime,
    refetchInterval: 60 * 1000,
  });

  return (
    <div>
      {isLoading && <Spinner />}
      {isError && (
        <p className="text-center text-red-500">
          Erreur lors du chargement du temps de calcul
        </p>
      )}
      {time && <p>{`Temps avant calcul : ${formatTime(time?.time * 1000)}`}</p>}
    </div>
  );
}

import ActionType from "./ActionType";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../../components/ui/Spinner";
import getActions from "../api/getActions";

export default function ActionTypeList() {
  const {
    data: actions,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["actions"],
    queryFn: getActions,
  });

  return (
    <div>
      <h2 className="font-bold text-xl text-center mb-2">
        Actions disponibles
      </h2>
      {isLoading && <Spinner className="my-8" />}
      {isError && (
        <p className="text-center text-red-500">
          Erreur lors du chargement des actions
        </p>
      )}
      {!isLoading && !isError && (
        <ul className="flex flex-wrap justify-center list-none gap-4">
          {actions?.map((action) => (
            <ActionType key={action.type} action={action} />
          ))}
        </ul>
      )}
    </div>
  );
}

import { TAction } from "../models/action.model";
import { baseUrl, headers } from "../api/config";
import ActionType from "./ActionType";
import { useMutation, useQuery } from "@tanstack/react-query";
import Spinner from "./ui/Spinner";
import { queryClient } from "../providers/react-query.provider";

async function getActions(): Promise<TAction[]> {
  const actionsData = await fetch(`${baseUrl}/actions`);
  return actionsData.json();
}

async function addToQueue(type: string) {
  await fetch(`${baseUrl}/queue/${type}`, {
    method: "PUT",
    headers,
  });
}

export default function ActionList() {
  const {
    data: actions,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["actions"],
    queryFn: getActions,
  });

  const {
    isError: isErrorMutation,
    mutate,
    isPending,
  } = useMutation({
    mutationFn: addToQueue,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["queue"] }),
  });

  return (
    <div>
      <h2 className="font-bold text-xl text-center mb-2">
        Actions disponibles
      </h2>
      {isLoading && <Spinner className="my-16" />}
      {isError && (
        <p className="text-center text-red-500">
          Erreur lors du chargement des actions
        </p>
      )}
      {!isLoading && !isError && (
        <ul className="flex flex-wrap justify-center list-none gap-4">
          {actions?.map((action) => (
            <ActionType mutate={mutate} isPending={isPending} action={action} />
          ))}
        </ul>
      )}
      {isErrorMutation && (
        <p className="text-center text-red-500">
          Erreur lors de l'ajout de l'action
        </p>
      )}
    </div>
  );
}

import { TAction } from "../../../models/action.model";
import Button from "../../../components/ui/Button";
import { useMutation } from "@tanstack/react-query";
import addToQueue from "../api/addToQueue";
import { queryClient } from "../../../providers/react-query.provider";
import { useActionTypeLoadingContext } from "../../../hooks/useActionTypeLoading";
import { useEffect } from "react";

interface ActionProps {
  action: TAction;
}

export default function Action({ action }: ActionProps) {
  const { isPending, setIsPending } = useActionTypeLoadingContext();

  const {
    isError: isErrorMutation,
    mutate,
    isPending: isPendingMutation,
  } = useMutation({
    mutationFn: addToQueue,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["queue"] }),
  });

  useEffect(() => {
    setIsPending(isPendingMutation);
  }, [isPendingMutation]);

  return (
    <li>
      <div className="bg-blue-300 rounded-lg shadow-xl p-2">
        <h3 className="font-bold ml-2">{`Action ${action.type}`}</h3>
        <p className="ml-2">{`Crédits : ${action.credits}`}</p>
        <Button disabled={isPending} onClick={() => mutate(action.type)}>
          Ajouter à la file
        </Button>
      </div>
      {isErrorMutation && (
        <p className="text-center text-red-500">Erreur lors de l'ajout</p>
      )}
    </li>
  );
}

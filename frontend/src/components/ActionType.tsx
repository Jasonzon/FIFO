import { UseMutateFunction } from "@tanstack/react-query";
import { TAction } from "../models/action.model";
import Button from "./ui/Button";
import Spinner from "./ui/Spinner";

interface ActionProps {
  mutate: UseMutateFunction<void, Error, string, unknown>;
  isPending: boolean;
  action: TAction;
}

export default function Action({ isPending, mutate, action }: ActionProps) {
  return (
    <li key={action.type} className="bg-blue-300 rounded-lg shadow-xl p-2">
      <h3 className="font-bold ml-2">{`Action ${action.type}`}</h3>
      <p className="ml-2">{`Crédits : ${action.credits}`}</p>
      <Button disabled={isPending} onClick={() => mutate(action.type)}>
        Ajouter à la file
      </Button>
    </li>
  );
}

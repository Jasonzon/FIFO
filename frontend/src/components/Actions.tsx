import { useEffect, useState } from "react";
import { TAction } from "../models/action.model";
import { baseUrl } from "../api/config";
import Action from "./ActionType";

export default function Actions() {
  const [actions, setActions] = useState<TAction[]>([]);

  async function getActions() {
    const actionsData = await fetch(`${baseUrl}/actions`);
    const parsedActionsData = await actionsData.json();
    setActions(parsedActionsData);
  }

  useEffect(() => {
    getActions();
  }, []);

  return (
    <ul className="flex flex-row flex-1 gap-4">
      {actions.map((action) => (
        <Action action={action} />
      ))}
    </ul>
  );
}

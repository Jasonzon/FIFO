import { baseUrl } from "../api/config";
import { TAction } from "../models/action.model";
import Button from "./ui/Button";
import { headers } from "../api/config";

interface ActionProps {
  action: TAction;
}

export default function Action({ action }: ActionProps) {
  async function addToQueue() {
    try {
      await fetch(`${baseUrl}/queue/${action.type}`, {
        method: "PUT",
        headers,
      });
    } catch (error: any) {}
  }

  return (
    <li key={action.type}>
      <h3>{`Action ${action.type}`}</h3>
      <Button onClick={addToQueue}>Ajouter à la file</Button>
    </li>
  );
}

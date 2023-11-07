import { TAction } from "../../../models/action.model";
import { baseUrl } from "../../../api/config";

export default async function getActions(): Promise<TAction[]> {
  const actionsData = await fetch(`${baseUrl}/actions`);
  return actionsData.json();
}

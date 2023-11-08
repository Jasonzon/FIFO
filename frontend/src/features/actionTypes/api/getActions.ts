import { TAction } from "../../../models/action.model";
import { baseUrl } from "../../../api/config";

export default async function getActions(): Promise<TAction[]> {
  const res = await fetch(`${baseUrl}/actions`);
  if (!res.ok) {
    const error = await res.text();
    throw new Error(error);
  }
  return res.json();
}

import { queryClient } from "../../../providers/react-query.provider";
import { baseUrl } from "../../../api/config";

export default async function getQueue(): Promise<string[]> {
  queryClient.invalidateQueries({ queryKey: ["actions"] });
  const res = await fetch(`${baseUrl}/queue`);
  if (!res.ok) {
    const error = await res.text();
    throw new Error(error);
  }
  return res.json();
}

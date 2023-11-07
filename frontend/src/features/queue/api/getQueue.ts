import { queryClient } from "../../../providers/react-query.provider";
import { baseUrl } from "../../../api/config";

export default async function getQueue(): Promise<string[]> {
  queryClient.invalidateQueries({ queryKey: ["actions"] });
  const queueData = await fetch(`${baseUrl}/queue`);
  return queueData.json();
}

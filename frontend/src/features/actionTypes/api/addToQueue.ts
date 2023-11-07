import { baseUrl, headers } from "../../../api/config";

export default async function addToQueue(type: string) {
  await fetch(`${baseUrl}/queue`, {
    method: "POST",
    headers,
    body: JSON.stringify({ action: type }),
  });
}

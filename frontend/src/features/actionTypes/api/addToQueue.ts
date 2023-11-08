import { baseUrl, headers } from "../../../api/config";

export default async function addToQueue(type: string) {
  const res = await fetch(`${baseUrl}/queue`, {
    method: "POST",
    headers,
    body: JSON.stringify({ action: type }),
  });
  if (!res.ok) {
    const error = await res.text();
    throw new Error(error);
  }
}

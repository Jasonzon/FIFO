import { baseUrl } from "../../../api/config";

export default async function getExecutionTime(): Promise<{ time: number }> {
  const res = await fetch(`${baseUrl}/queue/time`);
  if (!res.ok) {
    const error = await res.text();
    throw new Error(error);
  }
  return res.json();
}

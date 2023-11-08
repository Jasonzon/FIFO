import { baseUrl } from "../../../api/config";

export default async function getCalculationTime(): Promise<{ time: number }> {
  const res = await fetch(`${baseUrl}/actions/time`);
  if (!res.ok) {
    const error = await res.text();
    throw new Error(error);
  }
  return res.json();
}

import { useContext, useEffect, useState } from "react";
import { baseUrl } from "../api/config";
import { QueueContext, TQueueContext } from "../context/queue.context";
import Action from "./Action";

export default function Queue() {
  const { queue, setQueue } = useContext(QueueContext) as TQueueContext;

  async function getQueue() {
    const queueData = await fetch(`${baseUrl}/queue`);
    const parsedQueueData = await queueData.json();
    setQueue(parsedQueueData);
  }

  useEffect(() => {
    getQueue();
  });

  return (
    <div>
      <h2>File d'attente</h2>
      <ul>
        {queue.map((action) => (
          <Action type={action} />
        ))}
      </ul>
    </div>
  );
}

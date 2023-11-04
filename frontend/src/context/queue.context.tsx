import React, { createContext, ReactNode, useState } from "react";

export type TQueueContext = {
  queue: string[];
  setQueue: React.Dispatch<React.SetStateAction<string[]>>;
};

export const QueueContext = createContext<TQueueContext | null>(null);

interface QueueProviderProps {
  children: ReactNode;
}

export function QueueProvider({ children }: QueueProviderProps) {
  const [queue, setQueue] = useState<string[]>([]);

  return (
    <QueueContext.Provider value={{ queue, setQueue }}>
      {children}
    </QueueContext.Provider>
  );
}

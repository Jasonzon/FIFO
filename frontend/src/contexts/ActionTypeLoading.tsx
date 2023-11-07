import { ReactNode, createContext, useState } from "react";

export type TActionTypeLoadingContext = {
  isPending: boolean;
  setIsPending: React.Dispatch<React.SetStateAction<boolean>>;
};

type TActionTypeLoadingContextChildren = {
  children: ReactNode;
};

export const ActionTypeLoadingContext =
  createContext<TActionTypeLoadingContext | null>(null);

export default function ActionTypeLoadingProvider({
  children,
}: TActionTypeLoadingContextChildren) {
  const [isPending, setIsPending] = useState(false);

  return (
    <ActionTypeLoadingContext.Provider value={{ isPending, setIsPending }}>
      {children}
    </ActionTypeLoadingContext.Provider>
  );
}

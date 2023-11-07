import { useContext } from "react";
import {
  ActionTypeLoadingContext,
  TActionTypeLoadingContext,
} from "../contexts/ActionTypeLoading";

export const useActionTypeLoadingContext = () => {
  return useContext(ActionTypeLoadingContext) as TActionTypeLoadingContext;
};

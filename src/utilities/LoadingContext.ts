import { createContext } from "react";

export type LoadingContext = {
  isLoading: boolean;
  loadingText: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setLoadingText: React.Dispatch<React.SetStateAction<string>>;
};

const voidContext: LoadingContext = {
  setLoading: () => {},
  setLoadingText: () => {},
  isLoading: false,
  loadingText: "",
};
const Context = createContext(voidContext);

export default Context;

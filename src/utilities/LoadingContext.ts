import {createContext} from "react"

export type LoadingContext = {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    isLoading: boolean;
}

const voidContext : LoadingContext = {
    isLoading: false,
    setLoading: () =>{},
}
const Context = createContext(voidContext);

export default Context
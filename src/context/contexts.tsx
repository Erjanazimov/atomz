import {EnumType} from "./enum";
import {createContext, ReactNode, useReducer} from "react";
import {TypesState} from "./interfaces";
import {reducers} from "./reducers";
import axios from "axios";

const {GET_NEWS, LOADING_NEWS, ERRORS_NEWS} = EnumType;
interface ContextStateDefault {
    contextState: TypesState,
    getNews: () => void
}

export const ContextDefault: TypesState  = {
    news: {
        results: [],
        next: null,
        count: 0,
        previous: null
    },
    errors: null,
    loading: false
}

export const Context = createContext<ContextStateDefault>({
    contextState: ContextDefault,
    getNews: () => null
})

const ContextProvider = ({ children }: any) => {
    const [contextState, dispatch] = useReducer(reducers, ContextDefault);

    const getNews = async () => {
        dispatch({type: LOADING_NEWS, payload: true});
        try {
            const {data} = await axios.get('https://bilal312.pythonanywhere.com/api/');
            dispatch({type: GET_NEWS, payload: data});
            dispatch({type: LOADING_NEWS, payload: false});
        } catch (e){
            dispatch({type: LOADING_NEWS, payload: false});
        }
    }
    const authContextData = {
        contextState,
        getNews
    };
    return (
        <Context.Provider value={authContextData}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;
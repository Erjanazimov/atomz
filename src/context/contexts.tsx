import {EnumType} from "./enum";
import {createContext, useReducer} from "react";
import {TypesState} from "./interfaces";
import {reducers} from "./reducers";
import axios from "axios";

const {GET_NEWS, LOADING_NEWS, ERRORS_NEWS, CLEAR_NEWS, INFO_NEWS, ERRORS_INFO_NEWS, LOADING_INFO_NEWS} = EnumType;
interface ContextStateDefault {
    contextState: TypesState,
    getNews: (id: number) => void,
    clearNews: () => void,
    infoNews: (id: number | string) => void
}

export const ContextDefault: TypesState  = {
    news: {
        results: [],
        next: null,
        count: 0,
        previous: null
    },
    info: {
        errors: null,
        loading: false,
        results: null
    },
    errors: null,
    loading: false
}

export const Context = createContext<ContextStateDefault>({
    contextState: ContextDefault,
    getNews: () => null,
    clearNews: () => null,
    infoNews: () => null
})

const ContextProvider = ({ children }: any) => {
    const [contextState, dispatch] = useReducer(reducers, ContextDefault);

    const getNews = async (id: number) => {
        dispatch({type: LOADING_NEWS, payload: true});
        try {
            const {data} = await axios.get(`https://bilal312.pythonanywhere.com/api/${id ? `?type_coffee=${id}` : ''}`);
            dispatch({type: GET_NEWS, payload: data});
            dispatch({type: LOADING_NEWS, payload: false});
        } catch (e){
            dispatch({type: LOADING_NEWS, payload: false});
            dispatch({type: ERRORS_NEWS, payload: e})
        }
    }

    const infoNews = async (id: number | string) => {
        dispatch({type: LOADING_INFO_NEWS, payload: true});
        try {
            const {data} = await axios.get(`https://bilal312.pythonanywhere.com/api/news-detail/${id}/`);
            dispatch({type: INFO_NEWS, payload: data});
            dispatch({type: LOADING_INFO_NEWS, payload: false});
        } catch (e){
            dispatch({type: LOADING_INFO_NEWS, payload: false});
            dispatch({type: ERRORS_INFO_NEWS, payload: e});
        }
    }
    const clearNews = () => {
        dispatch({type: CLEAR_NEWS})
    }
    const authContextData = {
        contextState,
        getNews,
        clearNews,
        infoNews
    };
    return (
        <Context.Provider value={authContextData}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;
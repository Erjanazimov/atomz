import {TypesState} from "./interfaces";
import {Actions} from "./types";
import {EnumType} from "./enum";

const {GET_NEWS, LOADING_NEWS, ERRORS_NEWS, CLEAR_NEWS, INFO_NEWS, ERRORS_INFO_NEWS, LOADING_INFO_NEWS} = EnumType;
export const reducers = (state: TypesState, action: Actions) => {
    switch (action.type){
        case GET_NEWS:
            return {
                ...state,
                news: {
                    ...action.payload
                }
            }
        case LOADING_NEWS:
            return {
                ...state,
                loading: action.payload
            }
        case ERRORS_NEWS:
            return {
                ...state,
                errors: action.payload
            }
        case CLEAR_NEWS:
            return {
                ...state,
                news: {
                    count: 0,
                    results: [],
                    previous: null,
                    next: null
                },
                loading: false,
                errors: null
            }
        case INFO_NEWS:
            return {
                ...state,
                info: {
                    ...state.info,
                    results: action.payload
                }
            }
        case LOADING_INFO_NEWS:
            return {
                ...state,
                info: {
                    ...state.info,
                    loading: action.payload
                }
            }
        case ERRORS_INFO_NEWS:
            return {
                ...state,
                info: {
                    ...state.info,
                    errors: action.payload
                }
            }
        default:
            return {
                ...state
            }
    }
}
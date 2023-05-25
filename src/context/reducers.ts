import {TypesState} from "./interfaces";
import {Actions} from "./types";
import {EnumType} from "./enum";

const {GET_NEWS, LOADING_NEWS, ERRORS_NEWS, CLEAR_NEWS} = EnumType;
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
        default:
            return {
                ...state
            }
    }
}
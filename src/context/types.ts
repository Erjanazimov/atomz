import {EnumType} from "./enum";
import {Coffee} from "./interfaces";

export const {GET_NEWS, LOADING_NEWS, ERRORS_NEWS, CLEAR_NEWS, INFO_NEWS, LOADING_INFO_NEWS, ERRORS_INFO_NEWS} = EnumType
export type Actions = {
    type: typeof GET_NEWS,
    payload: {
        count: number,
        next: null | string,
        previous: null | string,
        results: Coffee[];
    }
} | {
    type: typeof LOADING_NEWS,
    payload: boolean
} | {
    type: typeof ERRORS_NEWS,
    payload: any
} | {
    type: typeof CLEAR_NEWS,
} | {
    type: typeof INFO_NEWS,
    payload: Coffee
} | {
    type: typeof LOADING_INFO_NEWS,
    payload: boolean
} | {
    type: typeof ERRORS_INFO_NEWS,
    payload: any
}
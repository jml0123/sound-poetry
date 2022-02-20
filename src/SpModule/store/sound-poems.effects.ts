import { useDispatch } from "react-redux";
import SpHttpService from "../sound-poems.http-service";
import { SEARCH_POEM_DB_BY_LINE, SET_SEARCH_POEM_DB_RESULTS } from "./sound-poems-actionTypes";

// @ts-ignore
const SpEffects = store => next => action => {
    const spState = store.getState();

    if (action.type === SEARCH_POEM_DB_BY_LINE) {
        SpHttpService.searchByLine(action.line).then(results => {
            store.dispatch({type: SET_SEARCH_POEM_DB_RESULTS, results})
        })
    }
    
    next(action);
}

export default SpEffects;
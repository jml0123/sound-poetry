import SpHttpService from "../sound-poems.http-service";
import { SEARCH_POEM_DB_BY_LINE, SEARCH_POEM_DB_BY_TITLE, SET_SEARCH_POEM_DB_RESULTS, SEARCH_POEM_DB_BY_AUTHOR } from "./sound-poems-actionTypes";

// @ts-ignore
const SpEffects = store => next => action => {
    const spState = store.getState();

    if (action.type === SEARCH_POEM_DB_BY_LINE) {
        SpHttpService.searchByLine(action.line).then(results => {
            store.dispatch({type: SET_SEARCH_POEM_DB_RESULTS, results})
        })
    }

    if (action.type === SEARCH_POEM_DB_BY_AUTHOR) {
        SpHttpService.searchByAuthor(action.author).then(results => {
            store.dispatch({type: SET_SEARCH_POEM_DB_RESULTS, results})
        })
    }

    if (action.type === SEARCH_POEM_DB_BY_TITLE) {
        SpHttpService.searchByTitle(action.title).then(results => {
            store.dispatch({type: SET_SEARCH_POEM_DB_RESULTS, results})
        })
    }
    
    next(action);
}

export default SpEffects;
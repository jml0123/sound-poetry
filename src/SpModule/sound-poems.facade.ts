import { SEARCH_POEM_DB_BY_AUTHOR, SEARCH_POEM_DB_BY_LINE, SEARCH_POEM_DB_BY_TITLE } from './store/sound-poems-actionTypes';
import { useDispatch, useSelector } from 'react-redux';
import { SpState } from './store/sound-poems.reducers';

const SpFacade = () => {
    const dispatch = useDispatch();
    /**
     * SELECTORS
     */
    const selectCurrentSearchResults = useSelector((state: SpState) => state.currentSearchResults);
    const selectSearchLoading = useSelector((state: SpState) => state.searchLoading);
    const selectUserHasSearched = useSelector((state: SpState) => state.userHasSearched);
    /**
     * DISPATCHERS
     */
    const searchPoemDbByAuthor = (author: string) => {
        dispatch({type: SEARCH_POEM_DB_BY_AUTHOR, author})
    }
    const searchPoemDbByLine = (line: string) => {
        dispatch({type: SEARCH_POEM_DB_BY_LINE, line})
    }
    const searchPoemDbByTitle = (title: string) => {
        dispatch({type: SEARCH_POEM_DB_BY_TITLE, title})
    }
    
    return {
        /* SELECTORS */
        selectCurrentSearchResults,
        selectSearchLoading,
        selectUserHasSearched,
        /* DISPATCHERS */
        searchPoemDbByAuthor,
        searchPoemDbByLine,
        searchPoemDbByTitle
    }
}

export default SpFacade


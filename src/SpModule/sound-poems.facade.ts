import { SEARCH_POEM_DB_BY_AUTHOR, SEARCH_POEM_DB_BY_LINE, SEARCH_POEM_DB_BY_TITLE, SET_CURRENT_POEM } from './store/sound-poems-actionTypes';
import { useDispatch, useSelector } from 'react-redux';
import { SpState } from './store/sound-poems.reducers';
import { PoemDto } from './sound-poems.models';

const SpFacade = () => {
    const dispatch = useDispatch();
    /**
     * SELECTORS
     */
    const selectCurrentSearchResults = useSelector((state: SpState) => state.currentSearchResults);
    const selectSearchLoading = useSelector((state: SpState) => state.searchLoading);
    const selectUserHasSearched = useSelector((state: SpState) => state.userHasSearched);
    const selectCurrentPoem = useSelector((state: SpState) => state.currentPoem);
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
    const setCurrentPoem = (poem: PoemDto | null) => {
        console.log('Setting poem ');
        console.log(poem);
        dispatch({type: SET_CURRENT_POEM, poem})
    }
    
    return {
        /* SELECTORS */
        selectCurrentSearchResults,
        selectSearchLoading,
        selectUserHasSearched,
        selectCurrentPoem,
        /* DISPATCHERS */
        searchPoemDbByAuthor,
        searchPoemDbByLine,
        searchPoemDbByTitle,
        setCurrentPoem
    }
}

export default SpFacade


import SearchComponent from './Search.component';
import SpFacade from '../sound-poems.facade';
import ResultsComponent from './Results.component';
import { useEffect } from 'react';

export function SearchPage() {
    const {selectCurrentSearchResults, setCurrentPoem} = SpFacade();

    useEffect(() => setCurrentPoem(null), [])
    return (
        <>
            <SearchComponent/>
            <ResultsComponent results={selectCurrentSearchResults}/>
        </>
    )
}
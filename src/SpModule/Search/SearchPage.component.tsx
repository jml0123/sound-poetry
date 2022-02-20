import SearchComponent from './Search.component';
import SpFacade from '../sound-poems.facade';
import ResultsComponent from './Results.component';

export function SearchPage() {
    const {selectCurrentSearchResults} = SpFacade();
    return (
        <>
            <SearchComponent/>
            <ResultsComponent results={selectCurrentSearchResults}/>
        </>
    )
}
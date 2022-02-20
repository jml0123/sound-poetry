import React, {useState, useEffect} from 'react';
import { PoemDto } from '../sound-poems.models';
import { List, Banner, Spin } from '@douyinfe/semi-ui';
import './Results.component.scss';
import SpFacade from '../sound-poems.facade';
interface ResultsProps {
    results: PoemDto[];
}
export default function ResultsComponent(props: ResultsProps) {
const { 
        selectUserHasSearched,
        selectSearchLoading
      } = SpFacade();


const createLinesPreview = (lines: string[]) => {
    const slicedLines = lines.slice(0, 3);
    return slicedLines.join(`\n`).concat('...');
}

const emptyResults = () => {
    return selectUserHasSearched ? 
    <Banner
        fullMode={false}
        type="warning"
        description="No poems found for given search"
    /> : 
    <span className="sp-unsearched">(Search Poem DB to begin)</span>
}

const results = () => <div className="sp-search-results">
{ props.results.length ? 
<List
    dataSource={props.results}
    renderItem={r => 
        <List.Item className="sp-search-result-item">
            <h2 className="sp-search-result-item--title">{r.title ? r.title : '(Untitled Work)'}</h2>
            <h3 className="sp-search-result-item--author">
                <span className="sp-by-span">by </span> 
                <span className="sp-author-span">{r.author ? r.author : 'Unknown Author'}</span>
            </h3>
            <p className="sp-search-result-item--preview">{createLinesPreview(r.lines)}</p>
        </List.Item>
    }
/> :
emptyResults()
}
</div> 

const loading = () => 
    <div className="sp-search-loading">
        <Spin size="small"/>
        <span>Loading Poem DB Data</span>
    </div>;

return (
  <div className="sp-search-results-wrapper">
    { selectSearchLoading ? loading() : results() }
   </div>
);
  
}
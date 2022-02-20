import React, {useState, useEffect} from 'react';
import { PoemDto } from '../sound-poems.models';

interface ResultsProps {
    results: PoemDto[];
}
export default function ResultsComponent(props: ResultsProps) {

const searchResults = props.results.map(r => 
    <div>
        {r.title}
    </div>
);

return (
  <div className="sp-search-results">
    {searchResults}
  </div>
);
  
}
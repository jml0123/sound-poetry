import React, {useState, useEffect} from 'react';
import SpFacade from '../sound-poems.facade';

export default function SearchComponent() {
const [searchTerm, setSearchTerm] = useState('');
const [searchType, setSearchType] = useState('LINE');

const { 
  searchPoemDbByAuthor,
  searchPoemDbByLine,
  searchPoemDbByTitle
} = SpFacade();

const search = () => {
  switch (searchType) {
    case 'AUTHOR': 
      searchPoemDbByAuthor(searchTerm);
      break;
    case 'LINE': 
      searchPoemDbByLine(searchTerm);
      break;
    case 'TITLE': 
      searchPoemDbByTitle(searchTerm);
      break;
  }
}

return (
  <div className="sp-search-field">
    <h1>Search</h1>
    <input type="text" onChange={e => setSearchTerm(e.target.value)}></input>
    <input 
      type="radio" 
      id="search-by-line" 
      name="line" 
      value="LINE" 
      onChange={e => setSearchType('LINE')} 
      checked></input>
    <label htmlFor="line">Search By Line</label>
    <input 
      type="radio" 
      id="search-by-author" 
      name="author" 
      value="AUTHOR"
      onChange={e => setSearchType('AUTHOR')} 
      ></input>
      <label htmlFor="line">Search By Author</label>
    <input 
      type="radio" 
      id="search-by-title" 
      name="title" 
      value="TITLE"
      onChange={e => setSearchType('TITLE')} 
      ></input>
      <label htmlFor="line">Search By Title</label>
    <button type="submit" onClick={e => search()}>Search</button>
  </div>
);
  
}
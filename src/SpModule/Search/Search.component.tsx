import React, {useState, useEffect} from 'react';
import SpFacade from '../sound-poems.facade';
import { Input, Radio, Button, RadioGroup } from '@douyinfe/semi-ui';
import './Search.component.scss';
import { RadioChangeEvent } from '@douyinfe/semi-ui/lib/es/radio';
export default function SearchComponent() {
const [searchTerm, setSearchTerm] = useState('');
const [searchType, setSearchType] = useState('LINE');

const { 
  searchPoemDbByAuthor,
  searchPoemDbByLine,
  searchPoemDbByTitle,
  selectSearchLoading
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
  <div className="sp-search-wrapper">
    <div className="sp-search-field">
      <Input placeholder="Search Poem DB" type="text" onChange={value => setSearchTerm(value)}></Input>
      <Button theme="solid" type="tertiary" onClick={e => search()}>Search</Button>
    </div>
    <div className="sp-radio-group">
      <RadioGroup onChange={(e: RadioChangeEvent)=> setSearchType(e.target.value)} value={searchType}>
        <Radio
          value="LINE" 
          checked>
          By Line
        </Radio>
        <Radio
          value="AUTHOR"
        >
          By Author
          </Radio>
        <Radio 
          value="TITLE"
        >
          By Title
        </Radio>
      </RadioGroup>
    </div>
  </div>
);
  
}
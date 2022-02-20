import { PoemDto } from '../sound-poems.models';
import * as spActionTypes from './sound-poems-actionTypes';


export type SpAction = any;

export function searchPoemDbByLine(line: string) {
    const action: SpAction = {
      type: spActionTypes.SEARCH_POEM_DB_BY_LINE,
      line,
    }
}

export function setSearchPoemDbResults(results: PoemDto[]) {
  const action: SpAction = {
    type: spActionTypes.SET_SEARCH_POEM_DB_RESULTS,
    results,
  }
  return action.results;
}
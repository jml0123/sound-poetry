import { PoemDto } from '../sound-poems.models';
import * as spActionTypes from './sound-poems-actionTypes';


export type SpAction = any;

export function searchPoemDbByLine(line: string) {
    const action: SpAction = {
      type: spActionTypes.SEARCH_POEM_DB_BY_LINE,
      line,
    }
}

export function searchPoemDbByAuthor(author: string) {
  const action: SpAction = {
    type: spActionTypes.SEARCH_POEM_DB_BY_AUTHOR,
    author,
  }
}

export function searchPoemDbByTitle(title: string) {
  const action: SpAction = {
    type: spActionTypes.SEARCH_POEM_DB_BY_TITLE,
    title,
  }
}

export function setCurrentPoem(poem: PoemDto | null) {
  const action: SpAction = {
    type: spActionTypes.SET_CURRENT_POEM,
    poem,
  }
  return action.poem
}

export function setSearchPoemDbResults(results: PoemDto[]) {
  const action: SpAction = {
    type: spActionTypes.SET_SEARCH_POEM_DB_RESULTS,
    results,
  }
  return action.results;
}


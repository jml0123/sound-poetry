import { AnyAction, applyMiddleware, createStore } from 'redux';
import { PoemDto } from '../sound-poems.models';
import * as spActionTypes from './sound-poems-actionTypes';
import SpEffects from './sound-poems.effects';


export type SpState = {
  currentSearchResults: PoemDto[];
  currentPoem: PoemDto | null,
  searchLoading: boolean;
  userHasSearched: boolean;
}

const initialState: SpState = {
    currentSearchResults: [],
    currentPoem: null,
    searchLoading: false,
    userHasSearched: false,
}


const SpReducer = (
    state: SpState = initialState,
    action: AnyAction
  ): SpState => {
    switch (action.type) {
      case spActionTypes.SEARCH_POEM_DB_BY_LINE:
        return {
          ...state,
          searchLoading: true,
          userHasSearched: true,
          currentPoem: null,
          currentSearchResults: [],
        }
      case spActionTypes.SEARCH_POEM_DB_BY_AUTHOR:
        return {
          ...state,
          searchLoading: true,
          userHasSearched: true,
          currentPoem: null,
          currentSearchResults: [],
        }
      case spActionTypes.SEARCH_POEM_DB_BY_TITLE:
        return {
          ...state,
          searchLoading: true,
          userHasSearched: true,
          currentPoem: null,
          currentSearchResults: [],
        }
      case spActionTypes.SET_SEARCH_POEM_DB_RESULTS: 
        return {
          ...state,
          currentSearchResults: action.results,
          currentPoem: null,
          searchLoading: false
        }
      case spActionTypes.SET_CURRENT_POEM: 
        return {
          ...state,
          currentPoem: action.poem,
        }
    }
    return state
  }

  const spStore = createStore(SpReducer, applyMiddleware(SpEffects));

  export default spStore;
  
import { AnyAction, applyMiddleware, createStore } from 'redux';
import { PoemDto } from '../sound-poems.models';
import * as spActionTypes from './sound-poems-actionTypes';
import SpEffects from './sound-poems.effects';


export type SpState = {
  currentSearchResults: PoemDto[];
  searchLoading: boolean;
}

const initialState: SpState = {
    currentSearchResults: [],
    searchLoading: false
}


const SpReducer = (
    state: SpState = initialState,
    action: AnyAction
  ): SpState => {
    switch (action.type) {
      case spActionTypes.SEARCH_POEM_DB_BY_LINE:
        return {
          ...state,
          searchLoading: true
        }
      case spActionTypes.SET_SEARCH_POEM_DB_RESULTS: 
        return {
          ...state,
          currentSearchResults: action.results,
          searchLoading: false
        }
    }
    return state
  }

  const spStore = createStore(SpReducer, applyMiddleware(SpEffects));

  export default spStore;
  
import React from 'react';
import { Provider } from 'react-redux';
import { SearchPage } from './Search/SearchPage.component';
import spStore from './store/sound-poems.reducers';

export function SpModule() {
    return (
        <Provider store={spStore}>
            <SearchPage/>
        </Provider>
    )
}
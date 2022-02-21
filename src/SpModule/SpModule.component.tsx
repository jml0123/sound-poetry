import React from 'react';
import { Provider } from 'react-redux';
import { SearchPage } from './Search/SearchPage.component';
import { Routes, Route } from "react-router-dom";
import spStore from './store/sound-poems.reducers';
import RenderComponent from './Render/Render.component';
import RenderPage from './Render/RenderPage.component';

export function SpModule() {
    return (
        <Provider store={spStore}>
            <div className="sp-app-wrapper">
                <h1>Sound Poem Generator</h1>
                <Routes>
                    <Route path="/" element={<SearchPage />} />
                    <Route path="/author,title/:uid" element={<RenderPage />} />
                </Routes>
            </div>
        </Provider>
    )
}
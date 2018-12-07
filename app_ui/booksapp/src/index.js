import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { CookiesProvider } from 'react-cookie'
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import search from './Reducers/search'
import message from './Reducers/message'
import dropbox from './Reducers/dropbox'
import * as serviceWorker from './serviceWorker';

const store = createStore(combineReducers({
    search,
    dropbox,
    message
}))

ReactDOM.render((
    <CookiesProvider>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </CookiesProvider>
    ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

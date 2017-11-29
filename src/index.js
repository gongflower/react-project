import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import App from './router/index.js';
import HomeRedux from './Redux/HomeRedux';


const Redux = combineReducers({
	list: HomeRedux,
})

const store = createStore(Redux, {});


function renderPage() {
	ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}

renderPage();

store.subscribe(renderPage);

registerServiceWorker();

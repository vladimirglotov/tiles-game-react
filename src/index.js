import React from 'react';
import {render} from 'react-dom';
import './index.scss';
import App from './App';
import {createStore} from 'redux';
import { rootReducer } from './redux/rootReducer';
import {createFirstRoundCards} from './redux/actions';
import {Provider} from 'react-redux';

const store = createStore(rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(createFirstRoundCards());

render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

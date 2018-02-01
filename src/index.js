import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { rootReducer } from './reducers'
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(reduxThunk));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();

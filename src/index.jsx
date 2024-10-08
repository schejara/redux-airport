import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** TODO: import REDUX **/
import { createStore, combineReducers, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux';
/** TODO: Add REDUCERS */
import reducers from './components/reducers/reducers';
import logger from 'redux-logger';

/** TODO: Create store */
const storeInstance = createStore(
    combineReducers(
      {
        ...reducers
      }
    ),
    applyMiddleware(
      // ! Optional, any number of middleware could exist here
      logger
    )
  )



// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);
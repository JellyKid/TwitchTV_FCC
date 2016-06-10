import React from 'react';
import { render } from 'react-dom';
import { Provider , connect} from 'react-redux';

import makeStore from './store';

import App from './components/App';

import { newChannel } from './actions';

let store = makeStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);


const usernames = ["freecodecamp","eulcs2"];
usernames.forEach( name => {
  store.dispatch(newChannel(name));
});

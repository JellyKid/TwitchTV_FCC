import React from 'react';
import { render } from 'react-dom';
import { Provider , connect} from 'react-redux';

import makeStore from './store';
import ChannelList from './components/ChannelList';

import { addChannel, setStream, updateChannel } from './actions';

let store = makeStore();

render(
  <Provider store={store}>
    <ChannelList />
  </Provider>,
  document.getElementById('app')
);


const usernames = ["ESL_SC2","OgamingSC2","freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","cretetion"];
usernames.forEach( name => {
  store.dispatch(addChannel(name));
  store.dispatch(updateChannel(name));
});

setTimeout(function () {
  store.dispatch(addChannel('EULCS2'));
  store.dispatch(updateChannel('EULCS2'));
}, 3000);

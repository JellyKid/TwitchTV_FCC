import { addChannel,  setStream, setSearch, setStatus } from './sync';
import { ADD_CHANNEL, SET_STREAM, SET_SEARCH, SET_STATUS } from './actions';
import { List, Map } from 'immutable';

const INITIAL_STATE = Map({
  search: List(),
  channels: List()
});

export default function(state = INITIAL_STATE, action){
  switch (action.type) {
    case ADD_CHANNEL:
      return addChannel(state, action.channel);
    case SET_STREAM:
      return setStream(state, action.channel, action.stream);
    case SET_SEARCH:
      return setSearch(state, action.channels);
    case SET_STATUS:
      return setStatus(state, action.channel, action.status);
    default:
      return state;
  }
}

import { addChannel,  setStream, setSearch, setStatus, deleteChannel, sortByConnection } from './sync';
import { ADD_CHANNEL, SET_STREAM, SET_SEARCH, SET_STATUS, DELETE_CHANNEL, SORTBY_CONNECTION } from './actions';
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
    case DELETE_CHANNEL:
      return deleteChannel(state, action.channel);
    case SORTBY_CONNECTION:
      return sortByConnection(state);
    default:
      return state;
  }
}

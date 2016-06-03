import { List, Map, fromJS, OrderedMap } from 'immutable';
import actions from './actions';

export const INITIAL_STATE = Map({
  channels: List()
});

export function addChannel(state, name) {
  return state.updateIn(['channels'],
  arr => arr.push(
    Map({
      name: name,
      status: null,
      stream: null
    })
  )
);
}

export function setStream(state, channel, stream) {
  let index = state.get('channels').findIndex(C => C.get('name') === channel);
  if(index === -1){
    return state;
  }
  return state.setIn(['channels', index, 'stream'], stream);
}

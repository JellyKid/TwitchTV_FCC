import { List, Map, fromJS, OrderedMap } from 'immutable';
import actions from './actions';

let chanExists = (channels, chan) => {
  return channels.findIndex(C => C.get('name') === chan) === -1 ? false : true;
};

export function addChannel(state, name) {
  if(!chanExists(state.get('channels'), name)){
    return state.updateIn(['channels'],
    arr => arr.push(
        Map({
          name: name,
          status: null,
          stream: Map()
        })
      )
    );
  }
  return state;
}

export function setStatus(state, channel, status){
  let index = state.get('channels').findIndex(C => C.get('name') === channel);
  if(index === -1){
    return state;
  }
  return state.setIn(['channels', index, 'status'], status);
}

export function setStream(state, channel, stream) {
  let index = state.get('channels').findIndex(C => C.get('name') === channel);
  if(index === -1){
    return state;
  }
  return state.setIn(['channels', index, 'stream'], fromJS(stream));
}

export function setSearch(state, channels) {
  return state.setIn(['search'], List(channels));
}

export function deleteChannel(state, channel) {
  let index = state.get('channels').findIndex(C => C.get('name') === channel);
  if(index === -1){
    return state;
  }
  return state.deleteIn(['channels',index]);
}

export function sortByConnection(state) {
  let channels = state.get('channels').sortBy(
    c => c.get('status'),
    status => status === 'Streaming' ? -1 : 1
  );

  return state.set('channels',channels);
}

// (a,b) => {
//
//   if(a === b){
//     return 0;
//   }
//   if(a === 'Streaming'){
//     return -1;
//   }
//   return 1;
// }

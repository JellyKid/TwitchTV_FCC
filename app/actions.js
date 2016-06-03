import { fetchChannel } from './async';
//synchronous actions creators

export const ADD_CHANNEL = 'ADD_CHANNEL';
export function addChannel(channel) {
  return {
    type: ADD_CHANNEL,
    channel: channel
  };
}

export const SET_STREAM = 'SET_STREAM';
export function setStream(channel, stream) {
  return {
    type: SET_STREAM,
    channel: channel,
    stream: stream || null
  };
}


//async action creators
export function updateChannel(channel) {
  return dispatch => fetchChannel(dispatch,channel);
}

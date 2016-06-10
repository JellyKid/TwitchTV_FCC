import { fetchChannel, fetchSearch, addChannelAndUpdate } from './async';
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

export const DELETE_CHANNEL = 'DELETE_CHANNEL';
export function deleteChannel(channel) {
  return {
    type: DELETE_CHANNEL,
    channel: channel
  };
}

export const UNDO_LAST = 'UNDO_LAST';
export function undoLast() {
  return {
    type: UNDO_LAST
  };
}

export const REDO_LAST = 'REDO_LAST';
export function redoLast() {
  return {
    type: REDO_LAST
  };
}

export const SET_SEARCH = 'SET_SEARCH';
export function setSearch(channels) {
  return {
    type: SET_SEARCH,
    channels: channels
  };
}

export const SET_STATUS = 'SET_STATUS';
export function setStatus(channel, status) {
  return{
    type: SET_STATUS,
    channel: channel,
    status: status
  };
}

export const SORTBY_CONNECTION = 'SORTBY_CONNECTION';
export function sortByConnection() {
  return {
    type: SORTBY_CONNECTION
  };
}

//async action creators
export function updateChannel(channel) {
  return dispatch => fetchChannel(dispatch,channel);
}

export function searchChannel(searchString) {
  return dispatch => fetchSearch(dispatch, searchString);
}

export function newChannel(channel) {
  return dispatch => addChannelAndUpdate(dispatch, channel);
}

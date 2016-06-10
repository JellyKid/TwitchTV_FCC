import 'es6-promise';
import 'whatwg-fetch';
import { setStream, setSearch, addChannel, updateChannel, setStatus, sortByConnection } from './actions';
import {protocol,apiURI,buildUrl} from './twitchAPI';

export function fetchChannel(dispatch, channel) {
  dispatch(setStatus(channel, 'Updating...'));
  fetch(buildUrl(protocol, apiURI, 'streams', channel))
    .then(
      res => {
        if(res.status >= 400){
          dispatch(setStatus(channel, 'Error receiving channel...'));
          throw new Error(res);
        }
        return res.json();
      }
    )
    .then(
      json => {
        if(json.stream){
          dispatch(setStatus(channel, 'Streaming'));
        } else {
          dispatch(setStatus(channel, 'Disconnected'));
        }
        dispatch(setStream(channel, json.stream));
        dispatch(sortByConnection());
      }
    );
}

export function fetchSearch(dispatch, searchString) {
  if(searchString !== ''){
    fetch(buildUrl(protocol, apiURI, 'search','channels?limit=5&q=' + searchString))
    .then(
      res => {
        if(res.status >= 400){
          throw new Error(res);
        }
        return res.json();
      }
    )
    .then(json => {
      if(json.channels.length > 0){
        let found = json.channels.map((channel) => channel.name);
        dispatch(setSearch(found));
      } else {
        dispatch(setSearch(['No channels found!']));
      }
    });
  }
}

export function addChannelAndUpdate(dispatch, channel){
  dispatch(setSearch([]));
  dispatch(addChannel(channel));
  dispatch(updateChannel(channel));
}

import fetch from 'isomorphic-fetch';
import { setStream } from './actions';
import {protocol,apiURI,buildUrl} from './twitchAPI';

export function fetchChannel(dispatch, channel) {
  dispatch(setStream(channel, 'Updating...'));
  fetch(buildUrl(protocol, apiURI, 'streams', channel))
    .then(
      res => {
        if(res.status >= 400){
          dispatch(setStream(channel, 'Error receiving channel...'));
          throw new Error(res);
        }
        return res.json();
      }
    )
    .then(
      json => dispatch(setStream(channel, json.stream ? json.stream.game : json.stream))
    );
}

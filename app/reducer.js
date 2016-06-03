import { INITIAL_STATE, addChannel,  setStream } from './sync';
import { ADD_CHANNEL, SET_STREAM } from './actions';

export default function(state = INITIAL_STATE, action){
  switch (action.type) {
    case ADD_CHANNEL:
      return addChannel(state, action.channel);
    case SET_STREAM:
      return setStream(state, action.channel, action.stream);
    default:
      return state;
  }
}

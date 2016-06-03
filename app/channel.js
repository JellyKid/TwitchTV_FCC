import $ from "jquery";
import {protocol,apiURI,buildUrl} from './twitchAPI';

export default class channel {
  constructor(username) {
    this.state = {
      username: username,
      fetching: true,
      game: {
        title: null,
        url: null,
        profile_pic: null,
        banner: null
      },
      updated: Date.now(),
      online: false
    };
  }

  parseData(stream, state){
    if(stream){
      return Object.assign({},state,{
        fetching: false,
        game: {
          title: stream.channel.game,
          url: stream.channel.url,
          profile_pic: stream.channel.logo,
          banner: stream.channel.profile_banner
        },
        updated: Date.now(),
        online: true
      });
    }
    return Object.assign({},state,{
      online: false
    });
  }

  updateStream() {
    $.ajax({
      method: 'GET',
      url: buildUrl(protocol, apiURI, 'streams', this.state.username),
      dataType: 'jsonp'
    }).done((data) => {
      this.state = this.parseData(data.stream, this.state);
      return this.state;
    }).fail((msg) => {
      console.error(msg);
      return this.state;
    });
  }

  getStream() {
    return this.stream;
  }
}

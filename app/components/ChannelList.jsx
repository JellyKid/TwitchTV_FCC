import React from 'react';
import { connect } from 'react-redux';

import Channel from './Channel';

class ChannelList extends React.Component {
  render() {
    let list = this.props.channels.map((channel) => {
      let name = channel.get('name');
      let stream = channel.get('stream') || null;
      return <Channel username={name}
        status={this.getStatus(stream)}
        stream={this.getStream(stream)}
        key={name} />;
      });

    return <div className="channel-list">{list}</div>;
  }
  getStatus(stream){
    return stream ? "Streaming" : "Disconnected";
  }
  getStream(stream){
    return stream ? stream : "Disconnected";
  }
}


export default connect(mapStateToProps)(ChannelList);

function mapStateToProps(state) {
  return {channels: state.get('channels')};
}

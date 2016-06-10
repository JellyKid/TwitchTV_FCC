require('../style/channel-list.css');
import React from 'react';
import { connect } from 'react-redux';

import Channel from './Channel';

class ChannelList extends React.Component {
  render() {
    let list = this.props.channels.map((channel) => {
      let name = channel.get('name');
      let game = channel.getIn(['stream','game'],null);
      let description = channel.getIn(['stream','channel','status'], null);
      let preview = channel.getIn(['stream', 'preview', 'large'], null);
      let logo = channel.getIn(['stream','channel','logo'],null);
      return <Channel name={name}
        status={channel.get('status')}
        game={game}
        description={description}
        preview={preview}
        logo={logo}
        key={name} />;
      });
    return <div className="channel-list">{list}</div>;
  }
}

function mapStateToProps(state) {
  return {channels: state.get('channels')};
}

export default connect(mapStateToProps)(ChannelList);

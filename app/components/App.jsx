import React from 'react';
import ChannelList from './ChannelList';
import AddChannel from './AddChannel';
import '../style/app.css'

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="header">Twitch Streaming</h1>
        <AddChannel />
        <ChannelList />
      </div>
    );
  }
}

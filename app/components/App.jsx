import React from 'react';
import ChannelList from './ChannelList';
import AddChannel from './AddChannel';


export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <AddChannel />
        <ChannelList />
      </div>
    );
  }
}

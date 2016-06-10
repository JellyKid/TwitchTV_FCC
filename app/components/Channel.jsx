import React from 'react';

export default class Channel extends React.Component {
  render() {
    var channelInfo;
    if(this.props.status === 'Streaming'){
      channelInfo =
        <div className="channelInfo">
          <img src={this.props.logo} className="logo" />
          <h2>{this.props.name}</h2>
          <div className="game">
            <h3>{this.props.game}</h3>
            <h4>{this.props.description}</h4>
          </div>

          <div className="preview">
            <div>
              <img src={this.props.preview} className="smallPreview" />
              <span><img src={this.props.preview} className="largePreview" /></span>
            </div>
          </div>
        </div>;
    } else {
      channelInfo =
        <div className="channelInfo"><h2>{this.props.name}</h2> <h2>{this.props.status}</h2></div>;
    }


    return <div className={this.props.status + " channel"}>
      {channelInfo}
      <div className="closeButton">X</div>
    </div>;
  }
}

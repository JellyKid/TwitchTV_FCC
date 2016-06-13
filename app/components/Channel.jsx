import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteChannel } from '../actions';
import twitchURL from "file!../images/twitch.png";


class Channel extends React.Component {
  constructor(props){
    super(props);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }
  handleClickDelete(){
    let {deleteChannel} = this.props;
    deleteChannel(this.props.name);
  }
  render() {
    var channelInfo;
    if(this.props.status === 'Streaming'){
      channelInfo =
        <div className="channelInfo">
          <img src={this.props.logo} className="logo" />
          <a href={"https://www.twitch.tv/" + this.props.name}>
            <h2 className="name">{this.props.name}</h2>
          </a>
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
      console.log(twitchURL);
      channelInfo =
        <div className="channelInfo">
          <img src={twitchURL} className="logo" />
          <a href={"https://www.twitch.tv/" + this.props.name}>
            <h2 className="name">{this.props.name}</h2>
          </a>
          <h2>{this.props.status}</h2>
        </div>;
    }


    return <div className={this.props.status + " channel"}>
      {channelInfo}
      <div className="closeButton" onClick={this.handleClickDelete}>
        <i className="fa fa-times fa-4x"></i>
      </div>
    </div>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({deleteChannel}, dispatch);
}


export default connect(null,mapDispatchToProps)(Channel);

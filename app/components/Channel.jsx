import React from 'react';

export default class Channel extends React.Component {
  render() {
    return <div className={this.props.status}>
      <div>
        Channel {this.props.username}:
      </div>
      <div>{this.props.stream}</div>
    </div>;
  }
}

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newChannel } from '../actions';

class SearchItem extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    let {newChannel, updateChannel, setSearch} = this.props;
    if(this.props.name !== 'No channels found!'){
      newChannel(this.props.name);
    }
  }
  render(){
    return (<li onClick={this.handleClick}>{this.props.name}</li>);
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({newChannel}, dispatch);
}


export default connect(null,mapDispatchToProps)(SearchItem);

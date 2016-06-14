import React from 'react';
import { connect } from 'react-redux';
import {  newChannel, searchChannel, setSearch } from '../actions';
import { bindActionCreators } from 'redux';
import { FormGroup, FormControl, HelpBlock, ControlLabel } from 'react-bootstrap';
import SearchDropdown from './SearchDropdown';

class AddChannel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.timeout = null;
  }

  // getValidationState() {
  //   const length = this.state.value.length;
  //   if (length > 10) return 'success';
  //   else if (length > 5) return 'warning';
  //   else if (length > 0) return 'error';
  // }

  handleChange(e) {
    let {searchChannel, setSearch} =  this.props;
    this.setState({ value: e.target.value });
    if(this.timeout){
      clearTimeout(this.timeout);
    }
    if(e.target.value === ''){
      setSearch([]);
    } else {
      this.timeout = setTimeout(() => {
        searchChannel(this.state.value);
      }, 500);
    }


  }

  handleSubmit(e){
    e.preventDefault();
    let {newChannel} = this.props;

    this.setState({value: ''});
    newChannel(this.state.value);
    if(this.timeout){
      clearTimeout(this.timeout);
    }
  }

  handleItemClick(){
    this.setState({ value: ''});
  }

  handleKeyUp(e){
    if(e.key === 'Escape'){
      let {setSearch} = this.props;
      if(this.timeout){
        clearTimeout(this.timeout);
      }
      this.setState({ value: ''});
      setSearch([]);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} onKeyUp={this.handleKeyUp}>
          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel>Please search for a channel to add</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
          </FormGroup>
        </form>
        <div className="SearchOuter">
          <SearchDropdown search={this.props.search} handleItemClick={this.handleItemClick.bind(this)} />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({newChannel, searchChannel, setSearch}, dispatch);
}

function mapStateToProps(state) {
  return {
    search: state.get('search')
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(AddChannel);

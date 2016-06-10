import React from 'react';
import SearchItem from './SearchItem';
import onClickOutside from 'react-onclickoutside';
import { connect } from 'react-redux';
import { setSearch } from '../actions';
import { bindActionCreators } from 'redux';
import '../style/search.css';

class SearchDropdown extends React.Component {
  constructor(props){
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  handleClickOutside(){
    let { setSearch } =  this.props;
    setSearch([]);
  }
  render(){
    let Found = this.props.search.map((name) => {
      return <SearchItem key={name} name={name} />;
    });
    return <ul onClick={this.props.handleItemClick} className="SearchResults">{Found}</ul>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSearch}, dispatch);
}

export default connect(null,mapDispatchToProps)(onClickOutside(SearchDropdown));

import React, { Component } from "react";
import {connect} from 'react-redux';
import {setSearchBarActive} from '../../redux/action';
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import "./SearchBar.scss";
import {setSearchData} from '../../redux/action';
import AddButton from '../AddButton/AddButton';

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.searchBarRef = React.createRef();
    this.activeSearchBar = this.activeSearchBar.bind(this);
  }


  activeSearchBar() {
    this.searchBarRef.current.focus();
  }

  searchChangeHandler = (value) => {
    this.props.setSearchData(value);
  }



  render(){
    return (
      <>
      <div className="search-bar" >
        <div 
      className="cover"
      style={this.props.searchBarActive ? {display:'block'}: {display:'none'}}>
        </div>
        <div>
          <Paper 
            className="root-searchbar"
            tabIndex="-1"
            onFocus = {() => {this.props.setSearchBarActive(true) }} 
            onBlur = {() => {this.props.setSearchBarActive(false)}}
            onChange = {(e) => {this.searchChangeHandler(e.target.value)}}  
          >
            <IconButton className="iconButton" aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase 
              className="input" 
              placeholder="Search foods..."
              inputRef = {this.searchBarRef} />
          </Paper> 
        </div>
      </div>
      <AddButton activeSearchBar= {this.activeSearchBar}/>
      </>
      
      
    );
  }
}

const mapStateToProps = state => ({
  searchBarActive: state.searchBarActive,
})

const mapDispatchToProps = dispatch => ({
  setSearchBarActive: (e) => dispatch(setSearchBarActive(e)),
  setSearchData: (value) => dispatch(setSearchData(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

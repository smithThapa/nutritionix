import React, { Component } from "react";
import { connect } from 'react-redux';
import { setSearchBarActive, setCurrentSearchValue } from '../../redux/action';
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import "./SearchBar.scss";
import { setSearchData } from '../../redux/action';
import AddButton from '../AddButton/AddButton';
import axios from 'axios';
import {APP_ID, APP_KEY} from '../../utils/api';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.searchBarRef = React.createRef();
    this.activeSearchBar = this.activeSearchBar.bind(this);

  }


  activeSearchBar() {
    this.searchBarRef.current.focus();
  }

  searchChangeHandler = (value) => {
    this.props.setCurrentSearchValue(value);
    this.getInstantSearchResults(value, this.props.setSearchData)
  }

  getInstantSearchResults = (value, callback) => {
    const searchURLGenerator = value => `https://trackapi.nutritionix.com/v2/search/instant?query=${value}`

    if (value) {
      axios({
        method: 'get',
        url: searchURLGenerator(value),
        headers: {
          'x-app-id': `${APP_ID}`,
          'x-app-key': `${APP_KEY}`
        }
      }).then(res => {
        if (searchURLGenerator(this.props.currentSearchValue) == res.config.url) {
          callback({
            value: value,
            data: res.data
          })
        }
      });
    } else {
      callback({
          value: '',
          data: {
            'branded': [],
            'common': []
          }
        })
    }


  }



  render() {
    return (
      <>
        <div className="search-bar" >
          <div
            className="cover"
            style={this.props.searchBarActive ? { display: 'block' } : { display: 'none' }}>
          </div>
          <div>
            <Paper
              className="root-searchbar"
              tabIndex="-1"
              onFocus={() => { this.props.setSearchBarActive(true) }}
              onBlur={() => { this.props.setSearchBarActive(false) }}
              onChange={(e) => { this.searchChangeHandler(e.target.value) }}
            >
              <IconButton className="iconButton" aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                className="input"
                placeholder="Search foods..."
                inputRef={this.searchBarRef} />
            </Paper>
          </div>
        </div>
        <AddButton activeSearchBar={this.activeSearchBar} />
      </>


    );
  }
}

const mapStateToProps = state => ({
  searchBarActive: state.searchBarActive,
  currentSearchValue: state.currentSearchValue
})

const mapDispatchToProps = dispatch => ({
  setSearchBarActive: (e) => dispatch(setSearchBarActive(e)),
  setSearchData: (value) => dispatch(setSearchData(value)),
  setCurrentSearchValue: (value) => dispatch(setCurrentSearchValue(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

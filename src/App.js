import React, { Component } from 'react';
import './styles/App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import UserInfo from './components/UserInfo/UserInfo';
import DayToggle from './components/DayToggle/DayToggle';
import UserCaloriesInfo from './components/UserCaloriesInfo/UserCaloriesInfo';
import SelectedItemsList from './components/SelectedItemsList/SelectedItemsList';
import AddButton from './components/AddButton/AddButton';
import SearchList from './components/SearchList/SearchList';
import SelectedItem from './components/SelectedItem/SelectedItem';
import Hidden from '@material-ui/core/Hidden';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { connect } from 'react-redux';


const theme = createMuiTheme({
  palette: {
    primary: {
      main:'#6200ee'
    }
  }
})

class App extends Component {


  render(){
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <div className="navbar">
            <SearchBar/>
            <Hidden mdUp>
              <UserInfo/>
            </Hidden>
            <Hidden smDown>
              <DayToggle/>
            </Hidden>
          </div>

          <SearchList/>
          <SelectedItem/>
          
          <div className="main-section">
            <div>
              <Hidden mdUp>
                <DayToggle/>
              </Hidden>
              <Hidden smDown>
                <UserInfo/>
              </Hidden>
              
              <UserCaloriesInfo/>
            </div>
            <SelectedItemsList/>
          </div>
          <AddButton inputRef= {this.props.inputRef}/>
        </div>
      </MuiThemeProvider>

    )
  }

}

const mapStateToProps = state => ({
  inputRef: state.inputRef
})

export default connect(mapStateToProps,null)(App);


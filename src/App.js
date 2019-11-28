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

const theme = createMuiTheme({
  palette: {
    primary: {
      main:'#6200ee'
    }
  }
})

export class App extends Component {


  render(){
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <div class="navbar">
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
          
          <div class="main-section">
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
          
          <AddButton/>
        </div>
      </MuiThemeProvider>

    )
  }

}

export default App;


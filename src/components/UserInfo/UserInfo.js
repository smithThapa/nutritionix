import React, {Component} from 'react';
import './UserInfo.scss';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden'

export default class UserInfo extends Component {
  
  
  render(){
      return (
        <div className= "user-info">

              <img className="user-img" src={require("../../assets/user-photo.png")} alt="Avatar"></img>
              <Hidden mdUp>
                <p className="user-name">Jane</p>
              </Hidden>
              <Hidden smDown>
                <p className="user-name">Jane Appleseed</p>
              </Hidden>
              
              <div className="circle weight-circle"><p className="bold-num">57</p> <p>kg</p></div>
              <div className="circle height-circle"><p className="bold-num">163</p> <p>cm</p></div>
          
        </div>
      );
  }

}

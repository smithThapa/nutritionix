import React from "react";
import Divider from '@material-ui/core/Divider';
import {setSelectedItemActive} from '../../redux/action';
import {connect} from 'react-redux';



const mockSearchListCommon = [
  {
    name: 'Cheese',
    img: 'https://d2xdmhkmkbyw75.cloudfront.net/1034_thumb.jpg'
  },
  {
    name: 'Cheesecake',
    img: 'https://d2xdmhkmkbyw75.cloudfront.net/1034_thumb.jpg'
  },
  {
    name: 'Goat Cheese',
    img: 'https://d2xdmhkmkbyw75.cloudfront.net/1034_thumb.jpg'
  },
  {
    name: 'Feta Cheese',
    img: 'https://d2xdmhkmkbyw75.cloudfront.net/1034_thumb.jpg'
  },
  {
    name: 'Blue Cheese',
    img: 'https://d2xdmhkmkbyw75.cloudfront.net/1034_thumb.jpg'
  }
]

const mockSearchListBranded= [
  {
    name: 'Cheese',
    img: 'https://d2xdmhkmkbyw75.cloudfront.net/1034_thumb.jpg',
    brand: 'Cheesewich'
  },
  {
    name: 'Cheesecake',
    img: 'https://d2xdmhkmkbyw75.cloudfront.net/1034_thumb.jpg',
    brand: 'Cheesewich'
  },
  {
    name: 'Goat Cheese',
    img: 'https://d2xdmhkmkbyw75.cloudfront.net/1034_thumb.jpg',
    brand: 'Cheesewich'
  }
]



class SearchList extends React.Component {

  render() {
    return (
      <div className="search-container" style={{display:'none'}}>
        <div className="search-list">
          <h3 className="title-search-list">COMMON</h3>
          <ul className="unordered-list">
            {mockSearchListCommon.map(value => {
              return (
                <li className="search-item" key={value.name} onClick={() => {this.props.setSelectedItemActive(true) }}>
                  <img className="search-item-img" src={value.img} alt="search item"></img>
                  <div className="search-item-p-hr">
                    <p>{value.name}</p>
                    <Divider />
                  </div>

                </li>
              )
            })}
          </ul>
          <Divider />
          <h3 className="title-search-list" >BRANDED</h3>
          <ul className="unordered-list">
            {mockSearchListBranded.map(value => {
              return (
                <li className="search-item" key={value.name}>
                  <img className="search-item-img" src={value.img} alt="search item"></img>
                  <div className="search-item-p-hr">
                    <p>{value.name}</p>
                    <Divider />
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

    );
  }
  
}

const mapStateToProps = state => {

}


const mapDispatchToProps = dispatch => ({
  setSelectedItemActive: (bool) => {dispatch(setSelectedItemActive(bool))}
})

export default connect(null,mapDispatchToProps)(SearchList);


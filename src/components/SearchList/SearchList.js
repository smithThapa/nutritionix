import React from "react";
import Divider from '@material-ui/core/Divider';
import { setSelectedItemActive, setItemDetail, setSearchBarNotActive } from '../../redux/action';
import { connect } from 'react-redux';



class SearchList extends React.Component {

  foodItemHandler = (branded, value) => {
    this.props.setSelectedItemActive(true);
    this.props.setItemDetail(branded, value);
  }

  render() {
    let { searchData, searchBarActive } = this.props;
    let hidden = true;
    if (searchData.common.length > 0 || searchData.branded.length > 0) {
      hidden = false;
    }

    let background = false;
    if (searchBarActive || !hidden) {
      background = true;
    }


    return (
      <div
        className="search-container"
        style={background ? {} : { 'display': 'none' }}
      >
        <div className="search-list" style={!hidden ? {} : { display: 'none' }}>
          <h3 className="title-search-list">COMMON</h3>
          <ul className="unordered-list">
            {this.props.searchData.common.map((value, index) => {

              if (index <= 4) {
                return (
                  <div className="search-item-container" onClick={() => { this.foodItemHandler(false, value.food_name) }} key={value.food_name}>
                    <li className="search-item" style={(index == 0) ? { "paddingTop": "0px" } : {}} key={value.food_name} >
                      <img className="search-item-img" src={value.photo.thumb} alt="search item"></img>
                      <div className="search-item-p-hr">
                        <p className="common-food-name">{value.food_name}</p>
                        <Divider style={(index == 4) ? { "display": "none" } : {}} />
                      </div>

                    </li>
                  </div>

                )
              }

            })}
          </ul>
          <Divider />
          <h3 className="title-search-list" >BRANDED</h3>
          <ul className="unordered-list">
            {this.props.searchData.branded.map((value, index) => {
              
              if (index <= 4) {
                return (
                  <li className="search-item" key={value.food_name} style={(index == 0) ? { "paddingTop": "0px" } : {}} onClick={() => { this.foodItemHandler(true, value.nix_item_id) }}>
                    <img className="search-item-img" src={value.photo.thumb} alt="search item"></img>
                    <div className="search-item-p-hr">
                      <p className="branded-food-name">{value.food_name}</p>
                      <p className='search-item-brand-name'>{value.brand_name}</p>
                      <Divider style={(index == 4) ? { "display": "none" } : {}} />
                    </div>
                  </li>
                )
              }

            })}
          </ul>
        </div>
        <div className="background-search"
          onClick={() => { if (background === true) { this.props.setSearchBarNotActive() } }}>
        </div>


      </div>

    );
  }

}

const mapStateToProps = state => ({
  currentSearchValue: state.currentSearchValue,
  searchData: state.searchData,
  searchBarActive: state.searchBarActive
})


const mapDispatchToProps = dispatch => ({
  setSelectedItemActive: (bool) => { dispatch(setSelectedItemActive(bool)) },
  setItemDetail: (branded, value) => { dispatch(setItemDetail(branded, value)) },
  setSearchBarNotActive: () => { dispatch(setSearchBarNotActive()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchList);


// const mockSearchListCommon = [
//   {
//     name: 'Cheese',
//     img: 'https://d2xdmhkmkbyw75.cloudfront.net/1034_thumb.jpg'
//   },
//   {
//     name: 'Cheesecake',
//     img: 'https://d2xdmhkmkbyw75.cloudfront.net/1034_thumb.jpg'
//   },
//   {
//     name: 'Goat Cheese',
//     img: 'https://d2xdmhkmkbyw75.cloudfront.net/1034_thumb.jpg'
//   },
//   {
//     name: 'Feta Cheese',
//     img: 'https://d2xdmhkmkbyw75.cloudfront.net/1034_thumb.jpg'
//   },
//   {
//     name: 'Blue Cheese',
//     img: 'https://d2xdmhkmkbyw75.cloudfront.net/1034_thumb.jpg'
//   }
// ]

// const mockSearchListBranded= [
//   {
//     name: 'Cheese',
//     img: 'https://d2xdmhkmkbyw75.cloudfront.net/1034_thumb.jpg',
//     brand: 'Cheesewich'
//   },
//   {
//     name: 'Cheesecake',
//     img: 'https://d2xdmhkmkbyw75.cloudfront.net/1034_thumb.jpg',
//     brand: 'Cheesewich'
//   },
//   {
//     name: 'Goat Cheese',
//     img: 'https://d2xdmhkmkbyw75.cloudfront.net/1034_thumb.jpg',
//     brand: 'Cheesewich'
//   }
// ]

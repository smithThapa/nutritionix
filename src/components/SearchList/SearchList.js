import React from "react";
import Divider from '@material-ui/core/Divider';




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



export default function SearchList() {
  return (
    <div className="search-container">
      <div className="search-list">
        <h3 className="title-search-list">COMMON</h3>
        <ul className="unordered-list">
          {mockSearchListCommon.map(value => {
            return (
              <li className="search-item">
                <img className="search-item-img" src={value.img} alt="search item"></img>
                <div className= "search-item-p-hr">
                  <p>{value.name}</p>
                  <Divider/>
                </div>
                
              </li>
            )
          })}
        </ul>
        <Divider/>
        <h3 className="title-search-list" >BRANDED</h3>
        <ul className="unordered-list">
          {mockSearchListBranded.map(value => {
            return (
              <li className="search-item">
                  <img className="search-item-img" src={value.img} alt="search item"></img>
                  <div className= "search-item-p-hr">
                    <p>{value.name}</p>
                    <Divider/>
                  </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
    
  );
}

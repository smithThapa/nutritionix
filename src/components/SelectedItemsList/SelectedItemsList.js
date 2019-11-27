import React from 'react';
import Divider from '@material-ui/core/Divider';
// import './SelectedItemsList.scss';

export default function SelectedItemsList() {
    const foodAdded = (name, portion, calories, mealType) => {
        return (
            <div>
                <div className="food-added">
                
                <div className="image-name-portion">
                    <img className="food-img" src='https://d2xdmhkmkbyw75.cloudfront.net/1034_thumb.jpg'></img>
                    <div className="name-portion">
                        <div className="bold-font">{name}</div>
                        <div className= "grey">{portion}</div>
                    </div>
                </div>
                <div className="calories-mealType">
                    <div className="bold-font">{calories}</div>
                    <div className="grey">{mealType}</div>
                </div>
                
                
            </div>
            <Divider/>
            </div>
            
            
        )
    }

    const foodAddedArr = [
        {
            name: "Cheese",
            portion: "1 slice(28 g)",
            calories: "113 cal",
            mealType: "Snack"
        },
        {
            name: "Cheese",
            portion: "1 slice(28 g)",
            calories: "113 cal",
            mealType: "Snack"
        },
        {
            name: "Cheese",
            portion: "1 slice(28 g)",
            calories: "113 cal",
            mealType: "Snack"
        },
        {
            name: "Cheese",
            portion: "1 slice(28 g)",
            calories: "113 cal",
            mealType: "Snack"
        }
    ]
    
    const foodAddedHTML = foodAddedArr.map(food => {
        return foodAdded(food.name,food.portion, food.calories, food.mealType);
    })

    return (
        <div className= "selectedItemsList">         
            {foodAddedHTML}  
        </div>
    )
}

import React from 'react';
import Divider from '@material-ui/core/Divider';
import uuid from 'uuid';

import {connect} from 'react-redux';
import {calculateConsumedCalories,calculateConsumedGrams} from '../../utils/calculate';


class SelectedItemsList extends React.Component {



    render(){

        const foodAdded = (name, portion, servingUnit, grams, calories, mealType) => {
            return (
                <div key={uuid()}>
                    <div className="food-added">
                    
                    <div className="image-name-portion">
                        <img className="food-img" src='https://d2xdmhkmkbyw75.cloudfront.net/1034_thumb.jpg'></img>
                        <div className="name-portion">
                            <div className="bold-font food-item-name">{name}</div>
            <div className= "grey">{portion} {servingUnit} ({grams} g)</div>
                        </div>
                    </div>
                    <div className="calories-mealType">
                        <div className="bold-font">{calories} cal</div>
                        <div className="grey meal-type">{mealType}</div>
                    </div>
                    
                    
                </div>
                <Divider/>
                </div>
                
                
            )
        }
    
        // const foodAddedArr = [
        //     {
        //         name: "Cheese",
        //         portion: "1 slice(28 g)",
        //         calories: "113 cal",
        //         mealType: "Snack"
        //     },
        //     {
        //         name: "Cheese",
        //         portion: "1 slice(28 g)",
        //         calories: "113 cal",
        //         mealType: "Snack"
        //     },
        //     {
        //         name: "Cheese",
        //         portion: "1 slice(28 g)",
        //         calories: "113 cal",
        //         mealType: "Snack"
        //     },
        //     {
        //         name: "Cheese",
        //         portion: "1 slice(28 g)",
        //         calories: "113 cal",
        //         mealType: "Snack"
        //     }
        // ]


        const foodAddedArr = this.props.data.data_points[this.props.currentDateIndex].intake_list;
        console.log(foodAddedArr);
        
        const foodAddedHTML = foodAddedArr.map(food => {
            const consumedGrams = calculateConsumedGrams(food.serving_size, food.serving_qty, food.serving_weight_grams)
            const consumedCalories = calculateConsumedCalories(food.serving_size, food.serving_qty, food.nf_calories);
            console.log(food.meal_type)
            return foodAdded(food.food_name,food.serving_size, food.serving_unit,consumedGrams, consumedCalories, food.meal_type);
        })


        return (
            <div className= "selectedItemsList">         
                {foodAddedHTML}  
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.mockData,
    currentDateIndex: state.currentDateIndex

})

export default connect(mapStateToProps, null)(SelectedItemsList);





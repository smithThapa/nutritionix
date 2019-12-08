import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { calculateConsumedCalories } from '../../utils/calculate';

class UserCaloriesInfo extends React.Component {

    constructor(props) {
        super(props);
        this.caloriesMeal = [
            {
                calories: 0,
                mealType: "Breakfast"
            },
            {
                calories: 0,
                mealType: "Lunch"
            },
            {
                calories: 0,
                mealType: "Dinner"
            },
            {
                calories: 0,
                mealType: "Snack"
            }
        ]
        this.goalCalories = 1500;

    }

    getCaloriesBreakDown = () => {
        for(let i = 0; i < this.caloriesMeal.length; i++){
            this.caloriesMeal[i].calories = 0;
        }
        const { intakeList } = this.props;
        if (intakeList.length > 0) {
            for (let i = 0; i < intakeList.length; i++) {
                let consumedCalories = calculateConsumedCalories(intakeList[i].serving_size, intakeList[i].serving_qty, intakeList[i].nf_calories);
                if (intakeList[i].meal_type.toLowerCase() == 'breakfast') {
                    this.caloriesMeal[0].calories += consumedCalories;
                } else if (intakeList[i].meal_type.toLowerCase() == 'lunch') {
                    this.caloriesMeal[1].calories += consumedCalories;
                } else if (intakeList[i].meal_type.toLowerCase() == 'dinner') {
                    this.caloriesMeal[2].calories += consumedCalories;
                } else if (intakeList[i].meal_type.toLowerCase() == 'snack') {
                    this.caloriesMeal[3].calories += consumedCalories;
                } else {
                    console.log("Incorrect meal type");
                }

            }
        }

    }

    getTotalCalories = () => {
        let totalCalories = 0;
        for(let i= 0; i< this.caloriesMeal.length; i++){
            totalCalories += this.caloriesMeal[i].calories;
        }

        return totalCalories;
    }


    render() {
        this.getCaloriesBreakDown();
        let percentage = Math.round((this.getTotalCalories()/this.goalCalories)* 100, 0);

        const caloriesBreakdown = (calories, mealType) => {
            return (
                <div key={`${calories}-${mealType}`}>
                    <p className="calories">{calories}</p>
                    <p className="meal-type grey">{mealType}</p>
                </div>
            )
        }

        const caloriesMealHTML = this.caloriesMeal.map(meal => {
            return caloriesBreakdown(meal.calories, meal.mealType);
        })

        let flexGrow = 1;
        if(percentage < 10){
            flexGrow = `.0${percentage}`
        } else if (percentage >= 10 && percentage < 100){
            flexGrow = `.${percentage}`
        }


        return (
            <div className="calories-user-info">
                <div className="calories-data">
                    <div className="consumed-calories">
                        <p className="calories"> {this.getTotalCalories()} cal</p>
                        <p className="grey calories-p">consumed</p>
                    </div>

                    <div className="daily-calories-goal">
                        <p className="calories"> {this.goalCalories} cal</p>
                        <p className="grey calories-p">daily goal</p>
                    </div>
                </div>
                <div className="goal-percentage"  >
                    <LinearProgress variant="determinate" value={percentage>100? 100: percentage} />
                    <div className="percentage-num">
                        <div style={{'flexGrow': flexGrow}}> </div>
                        <p>{percentage}%</p>
                    </div>
                </div>
                <div className="calories-breakdown">
                    {caloriesMealHTML}
                </div>
                <Divider />


            </div>
        )
    }

}


const mapStateToProps = state => ({
    intakeList: state.mockData.data_points[state.currentDateIndex].intake_list,
    mockData: state.mockData
})


export default connect(mapStateToProps, null)(UserCaloriesInfo)

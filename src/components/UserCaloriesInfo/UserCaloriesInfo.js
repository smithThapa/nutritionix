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

    }

    getCaloriesBreakDown = () => {
        for(let i = 0; i < this.caloriesMeal.length; i++){
            this.caloriesMeal[i].calories = 0;
        }
        const { intakeList } = this.props;
        console.log("intake list: ", intakeList)
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


    render() {
        this.getCaloriesBreakDown();
        let percentage = 86;
        let percentageNumHTML = '';
        if (percentage < 5) {
            percentageNumHTML = (
                <div style={{ marginLeft: `${percentage}%` }} className="percent-num">{percentage}%</div>
            );
        } else if (percentage > 95) {
            percentageNumHTML = (
                <div style={{ marginLeft: `${percentage - 8}%` }} >{percentage}%</div>
            );
        } else {
            percentageNumHTML = (
                <div style={{ marginLeft: `${percentage}%` }} className="percent-num-transition">{percentage}%</div>
            )
        }

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



        return (
            <div className="calories-user-info">
                <div className="calories-data">
                    <div className="consumed-calories">
                        <p className="calories"> 1289 cal</p>
                        <p className="grey">consumed</p>
                    </div>

                    <div className="daily-calories-goal">
                        <p className="calories">1500 cal</p>
                        <p className="grey">daily goal</p>
                    </div>
                </div>
                <div className="goal-percentage"  >
                    <LinearProgress variant="determinate" value={percentage} />
                    {percentageNumHTML}
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
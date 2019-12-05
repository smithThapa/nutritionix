import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";

class UserCaloriesInfo extends React.Component {

    getCaloriesBreakdown = mealType => {
        return this.props.intakeList.map(data => {
            
        })
    }

    
  render() {
    let percentage = 86;
    let percentageNumHTML = "";
    if (percentage < 5) {
      percentageNumHTML = (
        <div style={{ marginLeft: `${percentage}%` }} className="percent-num">
          {percentage}%
        </div>
      );
    } else if (percentage > 95) {
      percentageNumHTML = (
        <div style={{ marginLeft: `${percentage - 8}%` }}>{percentage}%</div>
      );
    } else {
      percentageNumHTML = (
        <div
          style={{ marginLeft: `${percentage}%` }}
          className="percent-num-transition"
        >
          {percentage}%
        </div>
      );
    }

    const caloriesBreakdown = (calories, mealType) => {
      return (
        <div key={`${calories}-${mealType}`}>
          <p className="calories">{calories}</p>
          <p className="meal-type grey">{mealType}</p>
        </div>
      );
    };
    const caloriesMeal = [
      {
        calories: 153,
        mealType: "Breakfast"
      },
      {
        calories: 570,
        mealType: "Lunch"
      },
      {
        calories: 453,
        mealType: "Dinner"
      },
      {
        calories: 113,
        mealType: "Snack"
      }
    ];

    const caloriesMealHTML = caloriesMeal.map(meal => {
      return caloriesBreakdown(meal.calories, meal.mealType);
    });

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
        <div className="goal-percentage">
          <LinearProgress variant="determinate" value={percentage} />
          {percentageNumHTML}
        </div>
        <div className="calories-breakdown">{caloriesMealHTML}</div>
        <Divider />
      </div>
    );
  }
}

const mapStateToProps = state => ({
    intakeList: state.mockData.data_points[state.currentIndex].intake_list
})

export default connect(mapStateToProps, null)(UserCaloriesInfo)



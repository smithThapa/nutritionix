import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./DayToggle.scss";
import { setDayIndex } from "../../redux/action";
import { connect } from "react-redux";
import moment from "moment";

class DayToggle extends React.Component {
  getFormattedDate = subtractDays =>
    moment()
      .subtract(subtractDays, "days")
      .format("D MMMM");

  currentDayCounter = task => {
    let index = this.props.index;
    switch (task) {
      case "INCREASE":
        if (index <= 0) {
          index = 0;
        } else {
          index = index - 1;
        }

        return index;

      case "DECREASE":
        if (index >= 2) {
          index = 2;
        } else {
          index = index + 1;
        }

        return index;

      default:
        return 0;
    }
  };

  currentDateHandler = task => {
    const index = this.currentDayCounter(task);
    this.props.setDayIndex(index);
  };

  changeDay = index => {
    switch (index) {
      case 0:
        return "Today";
      case 1:
        return "Yesterday";
      case 2:
        return `${this.getFormattedDate(2)}`;
      default:
        return "Today";
    }
  };

  render() {
    return (
      <div className="toggle-day">
        <ArrowBackIosIcon
          className="arrow"
          onClick={() => {
            this.currentDateHandler("DECREASE");
          }}
        />
        <div className="day">{this.changeDay(this.props.index)}</div>
        <ArrowForwardIosIcon
          className="arrow"
          onClick={() => {
            this.currentDateHandler("INCREASE");
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  index: state.currentDateIndex
});

const mapDispatchToProps = dispatch => ({
  setDayIndex: index => {
    dispatch(setDayIndex(index));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DayToggle);

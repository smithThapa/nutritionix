import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './DayToggle.scss';
export default function DayToggle() {
    return (
    <div className="toogle-day">
        <ArrowBackIosIcon className = "arrow"/>
        <div className="day">Today</div>
        <ArrowForwardIosIcon className = "arrow"/>
    </div>
      
    );
  }
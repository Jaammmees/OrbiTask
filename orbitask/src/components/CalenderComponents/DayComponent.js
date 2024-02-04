import React from 'react';
import './DayComponent.css'; // Ensure you create a CSS file for styling

const DayComponent = ({ day, events}) => {


  return (
    <div className="day">
      <div className="date">{day}</div>

    </div>
  );
};

export default DayComponent;


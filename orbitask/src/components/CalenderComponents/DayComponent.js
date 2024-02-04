import React from 'react';
import './DayComponent.css'; // Ensure you create a CSS file for styling

const DayComponent = ({ day, events, startTime, endTime}) => {
  const numberOfHours = endTime - startTime + 1;

  return (
    <div className="day">
      <div className="date">{day}</div>
      {Array.from({length : numberOfHours }).map((_,index) => (

        <div key={index} className ="hour-slot"></div>

      ))}
    </div>
  );
};

export default DayComponent;


import React from 'react';
import './HourComponent.css'; // Ensure you create a CSS file for styling

const HourComponent = ({startTime, endTime }) => {
  const numberOfHours = endTime - startTime + 1;

  // Correcting the logic to ensure accurate hour display
  const timeSlots = Array.from({ length: numberOfHours }, (_, index) => {
    let hour = Number(startTime) + Number(index);
    let suffix = "";
    if(hour < 12){
      suffix = "AM";
    } else {
      if(hour === 12){
        suffix = "PM";
      } else {
        hour = hour % 12;
        suffix = "PM";
      }
      if(hour === 24){
        suffix = "AM";
        hour = 12;
      }
    }

    return hour + " " + suffix;
  });

  return (
      <div className="time-column">
        {timeSlots.map((time, index) => (
          <div key={index} className="hour-slot">
            {time}
          </div>
        ))}
      </div>
  );
};

export default HourComponent;


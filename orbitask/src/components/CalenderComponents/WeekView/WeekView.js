import React from 'react';
import DayComponent from '../DayComponent'; // Adjust the import path as needed
import HourComponent from '../HourComponent'; // Adjust the import path as needed
import './WeekView.css';

const WeekView = () => {
  return (
    <div className="weekView">
      <HourComponent startTime="6" endTime="22" />
      <div className="daysContainer">
        <DayComponent day={'Monday'} events={[]} />
        <DayComponent day={'Tuesday'} events={[]} />
        <DayComponent day={'Wednesday'} events={[]} />
        <DayComponent day={'Thursday'} events={[]} />
        <DayComponent day={'Friday'} events={[]} />
        <DayComponent day={'Saturday'} events={[]} />
        <DayComponent day={'Sunday'} events={[]} />
      </div>
    </div>
  );
};

export default WeekView;

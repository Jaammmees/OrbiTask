import React from 'react';
import DayComponent from '../DayComponent'; // Adjust the import path as needed
import HourComponent from '../HourComponent'; // Adjust the import path as needed
import './WeekView.css';

const WeekView = () => {
  return (
    <div className="weekView">
      <HourComponent startTime="6" endTime="22" />
      <div className="daysContainer">
        <DayComponent day={'Monday'} events={[]} startTime="6" endTime="22" />
        <DayComponent day={'Tuesday'} events={[]} startTime="6" endTime="22" />
        <DayComponent day={'Wednesday'} events={[]} startTime="6" endTime="22" />
        <DayComponent day={'Thursday'} events={[]} startTime="6" endTime="22" />
        <DayComponent day={'Friday'} events={[]} startTime="6" endTime="22" />
        <DayComponent day={'Saturday'} events={[]} startTime="6" endTime="22" />
        <DayComponent day={'Sunday'} events={[]} startTime="6" endTime="22" />
      </div>
    </div>
  );
};

export default WeekView;

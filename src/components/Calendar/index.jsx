import React from 'react';
import { CalendarWrapper } from './style';
import { Calendar as ReactCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendar = ({ selectedDate, onDateChange }) => {
  return (
    <CalendarWrapper>
      <ReactCalendar onChange={onDateChange} value={selectedDate} />
    </CalendarWrapper>
  );
};

export default Calendar;






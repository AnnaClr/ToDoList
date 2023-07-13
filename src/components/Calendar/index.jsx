import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react';

export function MyCalendar() {
        const [selectedDate, setSelectedDate] = useState(new Date());
        const handleDateChange = (date) => {
          setSelectedDate(date);
        };
      
        return (
          <div>
            <h1>Meu Calendário</h1>
            <Calendar onChange={handleDateChange} value={selectedDate} />
          </div>
        );
};



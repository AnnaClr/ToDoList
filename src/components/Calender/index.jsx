import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { CalenderWrapper } from "./style";
import { Header } from "../Header";

const Calender = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const today = new Date();
    for (let i = 1; i <= 31; i++) {
      setEvents((prevEvents) => [...prevEvents, {
        date: today.setDate(i),
        title: `Event on ${today.toLocaleDateString()}`,
      }]);
    }
  }, []);

  return (
    <CalenderWrapper>
        <Header/>
        <Calendar
            events={events}
            onSelectDay={(day) => {
            setEvents((prevEvents) => [...prevEvents, {
                date: day,
                title: `Events on ${day.toLocaleDateString()}`,
            }]);
            }}
        />
    </CalenderWrapper>
  );
};
export default Calender;
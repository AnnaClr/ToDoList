import styled from 'styled-components';

export const CalenderWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@700&family=Inter:wght@300;600;700&family=Lato:ital@0;1&family=Poppins:wght@900&family=REM:wght@500&family=Roboto:ital@0;1&family=Sen:wght@500&family=Staatliches&display=swap');
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #090B10;
  padding: 20px;
  font-family: 'Anonymous Pro', monospace;
  font-size: 16px;

  @media (max-width: 600px) {
    padding: 10px;
    font-size: 14px;
  }

  .react-calendar {
    width: 100%;
    max-width: 100%;
    margin-top: 12rem;
    background: #A6CFCF;
    border: 1px solid #a0a096;
    font-family: 'Anonymous Pro', monospace;
    line-height: 1.125em;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) {
      margin-top: 8rem;
    }

    @media (max-width: 400px) {
      width: 70%;
    }
  }

  .react-calendar__navigation__arrow {
    color: #090B10;
    font-size: 1.9rem;
  }

  .react-calendar--doubleView {
    width: 700px;
  }

  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }

  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }

  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }

  .react-calendar button:enabled:hover {
    cursor: pointer;
  }

  .react-calendar__navigation__label__labelText {
    color: #023D4A;
    font-size: 1.9rem;
    font-family: 'Anonymous Pro', monospace;
  }

  .react-calendar__navigation {
    height: 44px;
    margin-bottom: 1em;
    align-items: center;
    justify-content: center;
    margin-top: 1.6rem;
    margin-left: 1.1rem;
  }

  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
  }

  .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
  }

  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
    color: #025159;
    margin-top: -2.6rem;
  }

  .react-calendar__month-view__weekNumbers {
    font-weight: bold;
    margin-bottom: 1.6rem;
  }

  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    padding: calc(0.75em / 0.75) calc(0.5em / 0.75);
  }

  .react-calendar__month-view__days__day--weekend {
    color: #A62424;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }

  .react-calendar__tile {
    max-width: 100%;
    text-align: center;
    padding: 0.75em 0.5em;
    background: none;
  }

  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #e6e6e6;
  }

  .react-calendar__tile--now {
    background: #ffff76;
    color: blue;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #ffffa9;
  }

  .react-calendar__tile--hasActive {
    background: #76baff;
  }

  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #a9d4ff;
  }

  .react-calendar__tile--active {
    background: #006edc;
    color: white;
  }
`
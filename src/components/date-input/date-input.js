import React, { useState } from "react";
import { DAYS, MONTHS, YEARS } from "../../constants";
import styles from "./date-input.module.css";

export function DateInput({ onChange, defaultValue, name }) {
  const defaultDate = !!defaultValue ? new Date(defaultValue) : new Date();

  const [date, setDate] = useState({
    day: defaultDate.getDay(),
    month: defaultDate.getMonth() + 1,
    year: defaultDate.getFullYear(),
    hour: defaultDate.getHours(),
    minute: defaultDate.getMinutes(),
    second: defaultDate.getSeconds(),
    milisecond: defaultDate.getMilliseconds(),
  });

  const getDateValue = (value) => (value < 10 ? `0${value}` : value);

  const getFullDateString = (dateState) =>
    `${dateState.year}-${getDateValue(dateState.month)}-${getDateValue(
      dateState.day
    )}T${dateState.hour}:${dateState.minute}:${dateState.second}.${
      dateState.milisecond < 100
        ? `0${dateState.milisecond}`
        : dateState.milisecond
    }Z`;

  const handleChange = ({ target: { name, value } }) => {
    const newDate = {
      ...date,
      [name]: value,
    };

    setDate(newDate);
    const fullDateString = getFullDateString(newDate);
    onChange({ target: { name: "birthdate", value: fullDateString } });
  };

  return (
    <>
      <div className={styles.root}>
        <div className={styles.selectContainer}>
          <label htmlFor="days"> day:</label>
          <select
            name="day"
            id="days"
            value={date.day}
            onChange={handleChange}
            autoComplete="true"
          >
            {DAYS.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.selectContainer}>
          <label htmlFor="months"> month:</label>
          <select
            name="month"
            id="months"
            value={date.month}
            onChange={handleChange}
            autoComplete="true"
          >
            {MONTHS.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.selectContainer}>
          <label htmlFor="years">year:</label>
          <select
            name="year"
            id="years"
            value={date.year}
            autoComplete="true"
            onChange={handleChange}
          >
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

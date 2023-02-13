//libs
import React from "react";
import styles from "./select.module.css";

export function Select({ onChange, options }) {
  return (
    <>
      <select
        className={styles.select}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}

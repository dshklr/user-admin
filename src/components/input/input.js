//libs
import React from "react";
import styles from "./input.module.css";

export function Input({ label, value, onChange, name, type = "text", error }) {
  return (
    <div className={styles.container}>
      <label className={error ? styles.errorLabel : styles.label}>
        {label}
        <input
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          className={error ? styles.hasError : styles.input}
        />
      </label>
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
}

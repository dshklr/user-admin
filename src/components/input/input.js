//libs
import React from "react";
import styles from "./input.module.css";

export function Input({
  label,
  value,
  onChange,
  name,
  className,
  type = "text",
  error,
}) {
  return (
    <>
      <label className={error ? styles.errorMessage : styles.label}>
        {label} {error && error}
        <input
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          className={error ? styles.hasError : styles.input}
        />
      </label>
      {/* {error && <p className={styles.errorMessage}>{error}</p>} */}
    </>
  );
}

import React from "react";
import styles from "./input.module.css";

export function Input({
  label,
  value,
  onChange,
  name,
  className,
  type = "text",
  error, // srtimg \ unde
}) {
  return (
    <>
      <label className={styles.label}>
        {label}
        <input
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          className={className}
        />
      </label>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </>
  );
}

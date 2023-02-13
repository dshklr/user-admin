//libs
import React from "react";
import styles from "./button.module.css";

export function Button({ onClick, label }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
}

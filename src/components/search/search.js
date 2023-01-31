import React from "react";
import styles from "./search.module.css";

export default function Search({ value, setSearchValue, placeholder }) {
  return (
    <div>
      <input
        className={styles.search}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
}

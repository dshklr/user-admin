import React from "react";

export function Input({ label, value, onChange, name, className, type }) {
  return (
    <label>
      {label}
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        className={className}
      />
    </label>
  );
}

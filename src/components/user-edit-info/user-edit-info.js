import React from "react";
import { Input } from "../input/input";
import styles from "./user-edit-info.module.css";

export function UserEditInfo({ user, onChange, onSave, errors, handleBack }) {
  return (
    <div className={styles.UserEditInfo}>
      <Input
        label="image source"
        value={user.avatar}
        name="avatar"
        onChange={onChange}
        className={errors["avatar"] ? styles.hasError : styles.input}
        error={errors["avatar"]}
      />
      <Input
        label="name"
        value={user.name}
        name="name"
        onChange={onChange}
        className={errors["name"] ? styles.hasError : styles.input}
        error={errors["name"]}
      />
      <Input
        label="date of birth"
        value={user.birthdate}
        name="birthdate"
        onChange={onChange}
        className={errors["birthdate"] ? styles.hasError : styles.input}
        error={errors["birthdate"]}
      />
      <Input
        label="city"
        name="city"
        value={user.city}
        onChange={onChange}
        className={errors["city"] ? styles.hasError : styles.input}
        error={errors["city"]}
      />
      <Input
        label=" email"
        value={user.email}
        name="email"
        onChange={onChange}
        className={errors["email"] ? styles.hasError : styles.input}
        error={errors["email"]}
      />
      <div className={styles.container}>
        <button className={styles.button} onClick={onSave}>
          save
        </button>
        <button className={styles.button} onClick={handleBack}>
          cancel
        </button>
      </div>
    </div>
  );
}

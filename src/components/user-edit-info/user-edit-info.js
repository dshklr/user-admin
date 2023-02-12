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
        className={errors["avatar"] ? styles.hasError : ""}
      />
      {errors["avatar"] && (
        <p className={styles.errorMessage}>{errors["avatar"]}</p>
      )}
      <Input
        label="name"
        value={user.name}
        name="name"
        onChange={onChange}
        className={errors["name"] ? styles.hasError : ""}
      />
      {errors["name"] && (
        <p className={styles.errorMessage}>{errors["name"]}</p>
      )}
      <Input
        label="date of birth"
        value={user.birthdate}
        name="birthdate"
        onChange={onChange}
        className={errors["birthdate"] ? styles.hasError : ""}
      />
      {errors["birthdate"] && (
        <p className={styles.errorMessage}>{errors["birthdate"]}</p>
      )}
      <Input
        label="city"
        name="city"
        value={user.city}
        onChange={onChange}
        className={errors["city"] ? styles.hasError : ""}
      />
      {errors["city"] && (
        <p className={styles.errorMessage}>{errors["city"]}</p>
      )}
      <Input
        label=" email"
        value={user.email}
        name="email"
        onChange={onChange}
        className={errors["email"] ? styles.hasError : ""}
      />
      {errors["email"] && (
        <p className={styles.errorMessage}>{errors["email"]}</p>
      )}
      <div className={styles.container}>
        <button onClick={onSave}>save</button>
        <button onClick={handleBack}>cancel</button>
      </div>
    </div>
  );
}

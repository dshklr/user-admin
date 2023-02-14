//libs
import React from "react";
//components
import { Input, Button } from "../index";
import styles from "./user-edit-info.module.css";

export function UserEditInfo({ user, onChange, onSave, errors, handleBack }) {
  return (
    <div className={styles.UserEditInfo}>
      <Input
        label="image source"
        value={user.avatar}
        name="avatar"
        onChange={onChange}
        error={errors["avatar"]}
      />
      <Input
        label="name"
        value={user.name}
        name="name"
        onChange={onChange}
        error={errors["name"]}
      />
      <Input
        label="date of birth"
        value={user.birthdate}
        name="birthdate"
        onChange={onChange}
        error={errors["birthdate"]}
      />
      <Input
        label="city"
        name="city"
        value={user.city}
        onChange={onChange}
        error={errors["city"]}
      />
      <Input
        label=" email"
        value={user.email}
        name="email"
        onChange={onChange}
        error={errors["email"]}
      />
      <div className={styles.container}>
        <Button label="save" onClick={onSave} />
        <Button onClick={handleBack} label="cancel" />
      </div>
    </div>
  );
}

//libs
import React from "react";
import { Link } from "react-router-dom";
//components
import calculateAge from "../../helpers";
import { Button } from "../index";
import styles from "./user-info.module.css";

export function UserProfileCard({ user, onDelete }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageName}>
        <img className={styles.image} src={user.avatar} alt="avatar" />
        <p className={styles.name}> {user.name}</p>
      </div>
      <div className={styles.info}>
        <p className={styles.title}>Age: </p>
        {calculateAge(user.birthdate)}
        <p className={styles.title}>City: </p>
        {user.city}
        <p className={styles.title}>Email: </p>
        {user.email}
      </div>
      <div className={styles.buttonContainer}>
        <Link to={`/user/${user.id}/edit`}>
          <Button label="edit" />
        </Link>
        <Button label="delete" onClick={onDelete} />
      </div>
    </div>
  );
}

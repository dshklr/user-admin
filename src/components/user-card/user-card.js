import React from "react";
import styles from "./user-card.module.css";
import calculateAge from "../helpers";

export default function UserCard({ user }) {
  // const handleDelete = (e) => {
  //   onDelete(user.id);
  // };
  return (
    <div className={styles.userCard} key={user.id}>
      <span className={styles.profile}>
        <img className={styles.avatar} src={user.avatar} alt="avatar" />
        {user.name}
      </span>
      <div className={styles.info}>
        <div className={styles.data}>
          <p className={styles.title}>joined</p>
          {new Date(user.createdAt).toDateString()}
        </div>
        <div className={styles.data}>
          <p className={styles.title}>city</p> {user.city}
        </div>
        <div className={styles.data}>
          <p className={styles.title}>age</p> {calculateAge(user.birthdate)}
        </div>
      </div>
    </div>
  );
}

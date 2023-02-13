//libs
import React from "react";
import { Link } from "react-router-dom";
import styles from "./user-card.module.css";
//components
import calculateAge from "../../helpers";

export function UserCard({ user }) {
  return (
    <Link className={styles.link} to={`/user/${user.id}`} key={user.id}>
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
          <div className={styles.data}>
            <p className={styles.title}>email</p> {user.email}
          </div>
        </div>
      </div>
    </Link>
  );
}

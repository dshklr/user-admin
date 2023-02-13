//libs
import React from "react";
//components
import { UserCard } from "../index";
import styles from "./user-list.module.css";

export function UserList({ users, onDelete }) {
  return (
    <div className={styles.userList}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} onDelete={onDelete} />
      ))}
    </div>
  );
}

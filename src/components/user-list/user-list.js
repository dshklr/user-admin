import React from "react";
import UserCard from "../user-card/user-card";
import styles from "./user-list.module.css";

export default function UserList({ users, onDelete }) {
  return (
    <div className={styles.userList}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} onDelete={onDelete} />
      ))}
    </div>
  );
}

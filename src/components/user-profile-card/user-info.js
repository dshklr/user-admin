import calculateAge from "../helpers";
import styles from "./user-info.module.css";
import { Link } from "react-router-dom";

export default function UserProfileCard({ user, onDelete }) {
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
      <div>
        <Link to={`/user/${user.id}/edit`}>
          <button className={styles.button}>edit</button>
        </Link>
        <button onClick={onDelete} className={styles.button}>
          delete
        </button>
      </div>
    </div>
  );
}

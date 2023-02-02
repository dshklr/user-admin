import calculateAge from "../helpers";
import styles from "./user-profile-card.module.css";

export default function UserProfileCard({ user, company }) {
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

      <div className={styles.info}>
        <p className={styles.title}>Company name: </p>
        {company.name}
        <p className={styles.title}>Title: </p>
        {company.jobTitle}
        <p className={styles.title}>Description: </p>
        {company.jobDescription}
        <p className={styles.title}>Type:</p>
        {company.jobType}
        <p className={styles.title}>Area: </p>
        {company.jobAre}
      </div>
      <div>
        <button className={styles.button}>edit</button>
      </div>
    </div>
  );
}

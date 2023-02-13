import styles from './loader.module.css'

export function Loading(){
    return (
      <div className={styles.loader}>
        <div className={styles.spinner}></div>
      </div>
    );
}
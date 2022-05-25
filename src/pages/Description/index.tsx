import styles from "./styles.module.scss";
import { descriptionData } from '../../data/globalData';

export function Description() {
  return (
    <div className={styles.wrapper}>
      <h2>{descriptionData.title}</h2>
      <div className={styles.gridContainer}>
        {descriptionData.categories.map((e) => (
          <div className={styles.categoryContainer}>
            <div className={styles.categoryHeader}>
              <img
                className={e.icon.altText !== "eye" ? styles.icon : styles.eye}
                src={e.icon.path}
                alt={e.icon.altText}
              />
              <span>{e.title}</span>
            </div>
            <p>{e.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
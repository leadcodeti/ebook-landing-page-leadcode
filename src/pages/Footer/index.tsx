import { MdCopyright } from "react-icons/md";
import styles from './styles.module.scss'

export function Footer (){
  
  return(
    <footer className={styles.wrapper}>
      <div className={styles.content}>
      <p>Developed by LeadCode</p>
      <p><MdCopyright />2022. All Rights Reserved</p>
      </div>
    </footer>
  )
}
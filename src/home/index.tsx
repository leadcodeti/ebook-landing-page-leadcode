import { FiInstagram } from "react-icons/fi";
import { FaFacebookF,FaTwitter } from "react-icons/fa";
import Logo from "../assets/logo1.svg";
import HomeImage from "../assets/modelo.svg";
import styles from "./styles.module.scss";

export function Home(){
  return(
    <div className={styles.wrapper}>
     <header className={styles.header}>
       <div className={styles.headerLogo}>
         <img src={Logo} alt="logo_leadCode" />
          <strong>LeadCode</strong>
       </div>
       <div className={styles.socialMedia}>
         <a href="*">
           <FiInstagram size={25} color="#6E4CB0"/>
         </a>
         <a href="*">
           <FaFacebookF size={25} color="#6E4CB0"/>
         </a>
         <a href="*">
           <FaTwitter size={25} color="#6E4CB0"/>
         </a>
       </div>
     </header>
     <section className={styles.container}>
       <div className={styles.content}>
         <div className={styles.contentTextHome}>
           <h1>Aprenda a fazer uma</h1><strong>landing page</strong>
           <p>
             Neste e-book você vai aprender a fazer uma landing 
             page de altaconversão para o seu produto/serviço
           </p>
           <button>e-book download</button>
         </div>
         <div className={styles.contentImageHome}>
         <img src={HomeImage} alt="home_image" />
         </div>
       </div>
     </section>
    </div>
  )
}
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Logo from "../../assets/logo1.png";
import HomeImage from "../../assets/modelo.png";
import styles from "./styles.module.scss";
import { DownloadModalButton } from "../../components/Modal";


export function Home() {

  return (
    <>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.headerLogo}>
            <img src={Logo} alt="logo_leadCode" />
          </div>
          <div className={styles.socialMedia}>
            <a href="*">
              <FiInstagram size={20} color="#6E4CB0" />
            </a>
            <a href="*">
              <FaFacebookF size={20} color="#6E4CB0" />
            </a>
            <a href="*">
              <FaTwitter size={20} color="#6E4CB0" />
            </a>
          </div>
        </header>
        <section className={styles.container}>
          <div className={styles.content}>
            <div className={styles.contentTextHome}>
              {/* <h1>
                Aprenda a fazer
                <br />
                uma <span>landing page</span>
              </h1> */}
              <p>
                Neste e-book você vai aprender <br />a fazer uma landing page
                <br /> de alta conversão para <br />o seu produto/serviço
              </p>
              <DownloadModalButton/>
            </div>
            <div className={styles.contentImageHome}>
              <img src={HomeImage} alt="home_image" />
            </div>
          </div>
        </section>
      </div>
      <div className={styles.grayGradient}></div>
    </>
  );
}

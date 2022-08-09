import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.section}>
        <a href="https://www.facebook.com">
          <FaFacebook color="white" fontSize="35px" />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagram color="white" fontSize="35px" />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitter color="white" fontSize="35px" />
        </a>
      </section>
      <p className={styles["rights-info"]}>@ 2022 Tanyo Nikolov</p>
    </footer>
  );
};

export default Footer;

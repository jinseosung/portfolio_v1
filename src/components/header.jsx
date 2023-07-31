import { Link } from "react-router-dom";
import styles from "../utils/styles/header.module.css";
import LogoImg from "../assets/logo.ico";

const Header = () => {
  return (
    <div className={styles.Container}>
        <Link className={styles.LogoLink} to="/">
          <img className={styles.LogoImg} src={LogoImg} alt="logo" />
          <h1 className={styles.Title}>Jinseo</h1>
        </Link>
        <nav>
          <ul className={styles.Menu}>
            <Link className={`${styles.MenuItem} ${styles.Active}`} to="#about">
              <li>HOME</li>
            </Link>
            <Link className={styles.MenuItem} to="#about">
              <li>A PROPOS</li>
            </Link>
            <Link className={styles.MenuItem} to="#projects">
              <li>PROJETS</li>
            </Link>
            <Link className={styles.MenuItem} to="testimonials">
              <li>TEMOIGNAGES</li>
            </Link>
            <Link className={styles.MenuItem} to="#contact">
              <li>CONTACT</li>
            </Link>
          </ul>
        </nav>
    </div>
  );
};

export default Header;

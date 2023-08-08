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
            <a className={styles.MenuItem} href="#profile">
              <li>HOME</li>
            </a>
            <a className={styles.MenuItem} href="#about">
              <li>A PROPOS</li>
            </a>
            <a className={styles.MenuItem} href="#projects">
              <li>PROJETS</li>
            </a>
            <a className={styles.MenuItem} href="#testimonials">
              <li>TEMOIGNAGES</li>
            </a>
            <a className={styles.MenuItem} href="#contact">
              <li>CONTACT</li>
            </a>
          </ul>
        </nav>
    </div>
  );
};

export default Header;

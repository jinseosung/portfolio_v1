import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../utils/styles/header.module.css";
import LogoImg from "../assets/logo.ico";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className={styles.Container}>
      <Link className={styles.LogoLink} to="/">
        <img className={styles.LogoImg} src={LogoImg} alt="logo" />
        <h1 className={styles.Title}>Jinseo</h1>
      </Link>
      <nav className={styles.Nav}>
        <ul className={isActive ? styles.Display : styles.Menu}>
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
        <button
          onClick={toggleClass}
          className={styles.ToggleBtn}
          aria-label="navigation menu toggle button"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
    </div>
  );
};

export default Header;

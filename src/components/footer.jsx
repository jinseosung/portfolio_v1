import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "../utils/styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.Container}>
      <div className={styles.Wrapper}>
        <h3 className={styles.Title}>
          Contact<span className={styles.Divider}></span>
        </h3>
        <Link className={styles.Description} to="mailto:jinseosung15@gmail.com">
          <p>jinseosung15@gmail.com</p>
        </Link>
        <ul className={styles.Links}>
          <Link
            className={styles.Link}
            to="https://github.com/jinseosung"
            target="_blank"
          >
            <li>
              <FontAwesomeIcon icon={faGithub} />
            </li>
          </Link>
          <Link
            className={styles.Link}
            to="https://www.linkedin.com/in/jinseo-sung-6177741b4/"
            target="_blank"
          >
            <li>
              <FontAwesomeIcon icon={faLinkedin} />
            </li>
          </Link>
        </ul>
        <p>©Jinseo Sung - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

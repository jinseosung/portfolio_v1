import styles from "../utils/styles/about.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faServer, faFire } from "@fortawesome/free-solid-svg-icons";
import logoOpenClassrooms from "../assets/logo_openclassrooms.png";

const About = () => {
  return (
    <section className={styles.Container}>
      <h3 className={styles.Title}>
        About me
        <span className={styles.Divider}></span>
      </h3>
      <p className={styles.Description}>
        Fortement motivée par les défis du développement web, <br /> je suis
        prête à explorer de nouvelles opportunités et à contribuer avec
        enthousiasme à des projets innovants. Dotée d'un esprit collaboratif,
        j'apprécie travailler en équipe pour créer des solutions technologiques
        percutantes
      </p>
      <ul className={styles.Majors}>
        <li className={styles.Major}>
          <FontAwesomeIcon icon={faCode} className={styles.Icon} />
          <p className={styles.MajorTitle}>Front-end</p>
          <p className={styles.MajorDescription}>
            HTML, CSS, JavaScript, React, API Web
          </p>
        </li>
        <li className={styles.Major}>
          <FontAwesomeIcon icon={faServer} className={styles.Icon} />
          <p className={styles.MajorTitle}>Back-end</p>
          <p className={styles.MajorDescription}>NodeJS, API REST, MongoDB</p>
        </li>
        <li className={styles.Major}>
          <FontAwesomeIcon icon={faFire} className={styles.Icon} />
          <p className={styles.MajorTitle}>Tools</p>
          <p className={styles.MajorDescription}>VSCode, Git</p>
        </li>
      </ul>
      <ul className={styles.Jobs}>
        <li className={styles.Job}>
          <img
            className={styles.JobImg}
            src={logoOpenClassrooms}
            alt="logo openclassrooms"
          />
          <div>
            <p className={styles.JobName}>Formation Développeur Web</p>
            <p className={styles.JobDescription}>Décembre 2022 - Août 2023</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default About;

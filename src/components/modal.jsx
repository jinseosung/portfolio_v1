import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import styles from "../utils/styles/modal.module.css";

const Modal = ({ toggleModal, projects, projectIdx }) => {
  const selectedProject = projects[projectIdx];
  return (
    <aside className={styles.Modal}>
      <div className={styles.Container}>
        <FontAwesomeIcon
          onClick={() => toggleModal(false)}
          icon={faX}
          className={styles.Icon}
        />
        <div className={styles.ContentContainer}>
          <img
            className={styles.Img}
            src={selectedProject.modalThumbnail}
            alt={selectedProject.title}
          />
          <div className={styles.InfoContainer}>
            <h4 className={styles.Title}>{selectedProject.title}</h4>
            <p className={styles.SubTitle}>Mission :</p>
            <p className={styles.Description}>{selectedProject.description}</p>
            <div className={styles.Tech}>
              {selectedProject.skills.map((skill, idx) => (
                <span key={idx}>{skill}</span>
              ))}
            </div>
            <Link
              target="_blank"
              to={selectedProject.github}
              className={styles.Link}
            >
              Visiter le GitHub
            </Link>
          </div>
        </div>
        <div className={styles.ProjectImagesContainer}>
          {selectedProject.detailImgs.map((num, idx) => (
            <img key={idx} src={num} alt={idx} className={styles.ProjectImg} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Modal;

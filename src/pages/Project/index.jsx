import { useParams } from "react-router-dom";
import styles from "../../utils/styles/project.module.css";

const Project = () => {
  const { projectId } = useParams();
  return (
    <div className={styles.Container}>
      <dir className={styles.Wrapper}>
        <p>Projet : {projectId}</p>
      </dir>
    </div>
  );
};

export default Project;

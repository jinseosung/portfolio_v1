import styles from "../utils/styles/projects.module.css";
import projectLists from '../datas/project.json'
import Carousel from "./carousel";

const Projects = () => {
  
  return (
    <section className={styles.Container} id="projects">
      <div className={styles.Wrapper}>
        <h3 className={styles.Title}>
          Projets
          <span className={styles.Divider}></span>
        </h3>
        <div>
          <Carousel projectlists={projectLists} />
        </div>
      </div>
    </section>
  );
};

export default Projects;

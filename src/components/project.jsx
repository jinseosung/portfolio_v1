import styles from "../utils/styles/project.module.css";
import projectLists from "../datas/project.json";
import Carousel from "./carousel";

const Project = ({
  isOpen,
  setIsOpen,
  projectIdx,
  setProjectIdx,
  toggleModal,
}) => {
  return (
    <section className={styles.Container} id="projects">
      <div className={styles.Wrapper}>
        <h3 className={styles.Title}>
          Projets
          <span className={styles.Divider}></span>
        </h3>
        <div>
          <Carousel
            projectlists={projectLists}
            isOpen={isOpen}
            projectIdx={projectIdx}
            setProjectIdx={setProjectIdx}
            toggleModal={toggleModal}
          />
        </div>
      </div>
    </section>
  );
};

export default Project;

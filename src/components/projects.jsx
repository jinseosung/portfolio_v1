import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../utils/styles/projects.module.css";
import Img1 from "../assets/1.jpg";
import Img2 from "../assets/2.jpg";
import Img3 from "../assets/3.jpg";
import { useState } from "react";
import Carousel from "./carousel";

const Projects = () => {
  const projectLists = [
    { id: 1, image: Img1, title: "title 1", description: "description 1" },
    { id: 2, image: Img2, title: "title 2", description: "description 2" },
    { id: 3, image: Img3, title: "title 3", description: "description 3" },
    { id: 4, image: Img1, title: "title 4", description: "description 4" },
    { id: 5, image: Img2, title: "title 5", description: "description 5" },
    { id: 6, image: Img3, title: "title 6", description: "description 6" },
  ];
  
  return (
    <section className={styles.Container}>
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

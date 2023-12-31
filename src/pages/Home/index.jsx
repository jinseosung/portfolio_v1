import Profile from "../../components/Profile";
import About from "../../components/About";
import Project from "../../components/Project";
// import Testimonial from "../../components/testimonial";
import Contact from "../../components/Contact";
import { useEffect, useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectIdx, setProjectIdx] = useState(0);
  const toggleModal = () => {
    !isOpen ? setIsOpen(true) : setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown);
  });

  const detectKeyDown = (e) => {
    if (!isOpen) {
      return;
    }
    if (e.key === "Escape" || e.key === "Esc") {
      toggleModal(false);
    }
  };

  return (
    <div>
      <Profile />
      <About />
      <Project
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        projectIdx={projectIdx}
        setProjectIdx={setProjectIdx}
        toggleModal={toggleModal}
      />
      {/* <Testimonial /> */}
      <Contact />
    </div>
  );
};

export default Home;

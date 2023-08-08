import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "./modal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../utils/styles/carousel.css";

import { Navigation, Pagination } from "swiper/modules";

const Carousel = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectIdx, setProjectIdx] = useState(0);
  const toggleModal = () => {
    !isOpen ? setIsOpen(true) : setIsOpen(false);
  };

  const projects = props.projectlists;
  return isOpen ? (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={58}
        // loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {projects.map((project, idx) => (
          <SwiperSlide
            key={project.id}
            onClick={() => {
              toggleModal();
              setProjectIdx(idx);
            }}
          >
            <div>
              <img src={project.image} alt={project.title} />
              <div className="project__container">
                <p className="project__title">{project.title}</p>
                <p className="project__description">{project.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Modal
        toggleModal={toggleModal}
        projects={projects}
        projectIdx={projectIdx}
      />
    </>
  ) : (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={58}
        // loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {projects.map((project, idx) => (
          <SwiperSlide
            key={project.id}
            onClick={() => {
              toggleModal();
              setProjectIdx(idx);
            }}
          >
            <div>
              <img src={project.image} alt={project.title} />
              <div className="project__container">
                <p className="project__title">{project.title}</p>
                <p className="project__description">{project.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;

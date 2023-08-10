import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Modal from "./modal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../utils/styles/carousel.css";

import { Navigation, Pagination } from "swiper/modules";

const Carousel = ({
  isOpen,
  projectlists,
  projectIdx,
  setProjectIdx,
  toggleModal,
}) => {
  const projects = projectlists;
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        // loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          769: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 3,
          },
        }}
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
                <p className="project__description">{project.subTitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {isOpen && (
        <Modal
          toggleModal={toggleModal}
          projects={projects}
          projectIdx={projectIdx}
        />
      )}
    </>
  );
};

export default Carousel;

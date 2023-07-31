import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../utils/styles/carousel.css";

import { Navigation, Pagination } from "swiper/modules";

import { Link } from "react-router-dom";

const Carousel = (props) => {
  const projects = props.projectlists;
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {projects.map((project, idx) => (
          <SwiperSlide>
            <Link key={project.id} to={`/projet/${project.id}`}>
              <img src={project.image} alt={project.title} />
              <p className="project__title">{project.title}</p>
              <p className="project__description">{project.description}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;

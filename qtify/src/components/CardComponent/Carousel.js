import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import "./Carousel.css";  // ✅ Import its own CSS

const Carousel = ({ items }) => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="card">
              <img src={item.image} alt={item.title} />
              <h3 className="card-title">{item.title}</h3>
              <button className="follow-button">{item.follows} Follows</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <LeftArrow />
      <RightArrow />
    </div>
  );
};

export default Carousel;

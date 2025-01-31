// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import CardComponent from "./CardComponent";
// import "./Section.css"; // Import the CSS file

// const Section = ({ title, apiUrl }) => {
//   const [albums, setAlbums] = useState([]);
//   const [showMore, setShowMore] = useState(false);

//   useEffect(() => {
//     axios.get(apiUrl)
//       .then(response => {
//         console.log("API Response:", response.data);
//         setAlbums(response.data)})
//       .catch(error => console.error("Error fetching albums:", error));
//   }, [apiUrl]);

//   const toggleShowMore = () => {
//     setShowMore(!showMore);
//   };

//   return (
//     <div className="section">
//       <div className="section-header">
//         <h2 className="text">{title}</h2>
//         <h2 className="collapsetext" onClick={toggleShowMore}>
//           {showMore ? "Collapse" : "Show All"}
//         </h2>
//       </div>
//       <div className={`grid-container ${showMore ? "expanded" : ""}`}>
//         {albums.slice(0, showMore ? albums.length : 5).map(album => (
//           <CardComponent key={album.id} album={album} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Section;
import React, { useState, useEffect } from "react";
import axios from "axios";
import CardComponent from "./CardComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Section.css"; // Import the CSS file

import leftArrow from "../../assests/left-arrow.svg"; // Replace with your SVG file
import rightArrow from "../../assests/right-arrow.svg"; // Replace with your SVG file

const Section = ({ title, apiUrl }) => {
  const [albums, setAlbums] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        console.log("API Response:", response.data);
        setAlbums(response.data);
      })
      .catch(error => console.error("Error fetching albums:", error));
  }, [apiUrl]);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="section">
      {/* Section Header */}
      <div className="section-header">
        <h2 className="text">{title}</h2>
        <h2 className="collapsetext" onClick={toggleShowMore}>
          {showMore ? "Collapse" : "Show All"}
        </h2>
      </div>

      {/* Conditional View: Grid or Carousel */}
      {showMore ? (
        <div className="grid-container">
          {albums.map(album => (
            <CardComponent key={album.id} album={album} />
          ))}
        </div>
      ) : (
        <div className="carousel-wrapper">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10} // Reduced spacing
            slidesPerView={7} // Show exactly 5 cards
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="carousel-container"
          >
            {albums.map(album => (
              <SwiperSlide key={album.id}>
                <CardComponent album={album} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="swiper-button-prev">
            <img src={leftArrow} alt="Previous" />
          </button>
          <button className="swiper-button-next">
            <img src={rightArrow} alt="Next" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Section;

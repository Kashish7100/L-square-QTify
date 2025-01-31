import React, { useState, useEffect } from "react";
import axios from "axios";
import CardComponent from "./CardComponent";
import "./Section.css"; // Import the CSS file

const Section = ({ title, apiUrl }) => {
  const [albums, setAlbums] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        console.log("API Response:", response.data);
        setAlbums(response.data)})
      .catch(error => console.error("Error fetching albums:", error));
  }, [apiUrl]);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="section">
      <div className="section-header">
        <h2 className="text">{title}</h2>
        <h2 className="collapsetext" onClick={toggleShowMore}>
          {showMore ? "Collapse" : "Show All"}
        </h2>
      </div>
      <div className={`grid-container ${showMore ? "expanded" : ""}`}>
        {albums.slice(0, showMore ? albums.length : 5).map(album => (
          <CardComponent key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};

export default Section;

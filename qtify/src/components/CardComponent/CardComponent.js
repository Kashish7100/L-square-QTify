import React from "react";
import "./CardComponent.css"; // Import the CSS file

const CardComponent = ({ album }) => {
  console.log("Album Data:", album);
  return (
    <div className="card-container">
    <div className="card">
      <img src={album.image} alt={album.title} />
      
      <div className="card-content">
      <button className="button">
            {album.follows} Follows
          </button>
      </div>
    </div>
    <h3 className="card-title">{album.title}</h3>
    {/* <h3>{album.title || "No Title Available"}</h3> */}
    </div>
  );
};

export default CardComponent;

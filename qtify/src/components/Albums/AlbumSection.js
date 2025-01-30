import React from "react";
import "./Albums.css";

const AlbumSection = ({ title, albums }) => {
  return (
    <div className="album-section">
      <h2>{title} <span>Show all</span></h2>
      <div className="album-list">
        {albums.map((album, index) => (
          <div key={index} className="album-card">
            <img src={album.image} alt={album.name} />
            <p>{album.name}</p>
            <span>{album.followers} Followers</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumSection;

import React, { useState } from "react";
import "./Songs.css";

const SongsSection = ({ songs }) => {
  const [selectedGenre, setSelectedGenre] = useState("All");

  return (
    <div className="songs-section">
      <div className="genre-tabs">
        {["All", "Rock", "Pop", "Jazz", "Blues"].map((genre) => (
          <button 
            key={genre} 
            className={selectedGenre === genre ? "active" : ""}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      <div className="songs-list">
        {songs
          .filter(song => selectedGenre === "All" || song.genre === selectedGenre)
          .map((song, index) => (
            <div key={index} className="song-card">
              <img src={song.image} alt={song.name} />
              <p>{song.name}</p>
              <span>{song.likes} Likes</span>
            </div>
        ))}
      </div>
    </div>
  );
};

export default SongsSection;

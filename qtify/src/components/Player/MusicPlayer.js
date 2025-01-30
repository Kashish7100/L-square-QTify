import React from "react";
import "./Player.css";

const MusicPlayer = () => {
  return (
    <div className="music-player">
      <p>Song name - Album name</p>
      <input type="range" min="0" max="100" />
      <button>▶️</button>
    </div>
  );
};

export default MusicPlayer;

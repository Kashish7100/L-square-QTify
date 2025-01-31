import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tabs, Tab } from "@mui/material";
import Section from "../CardComponent/Section";

const SongsSection = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    // Fetch songs data
    axios.get("https://qtify-backend-labs.crio.do/songs")
      .then(response => {
        setSongs(response.data);
      })
      .catch(error => console.error("Error fetching songs:", error));

    // Fetch genres data
    axios.get("https://qtify-backend-labs.crio.do/genres")
      .then(response => {
        setGenres(["All", ...response.data.map(g => g.key)]);
      })
      .catch(error => console.error("Error fetching genres:", error));
  }, []);

  // Filter songs based on selected genre
  const filteredSongs = selectedGenre === "All"
    ? songs
    : songs.filter(song => song.genre.key === selectedGenre);

  return (
    <div className="songs-section">
      <h2 className="section-title">Songs</h2>

      {/* Genre Tabs */}
      <Tabs
        value={selectedGenre}
        onChange={(e, newValue) => setSelectedGenre(newValue)}
        variant="scrollable"
        scrollButtons="auto"
      >
        {genres.map((genre, index) => (
          <Tab key={index} label={genre} value={genre} />
        ))}
      </Tabs>

      {/* Songs Carousel */}
      <Section title="" albums={filteredSongs} isSongsSection={true} />
    </div>
  );
};

export default SongsSection;

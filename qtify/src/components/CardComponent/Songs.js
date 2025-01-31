import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "@mui/material";
import Section from "./Section";
import Carousel from "./CardComponent";

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    // Fetch songs data
    fetch("https://qtify-backend-labs.crio.do/songs")
      .then((res) => res.json())
      .then((data) => setSongs(data));

    // Fetch genres data
    fetch("https://qtify-backend-labs.crio.do/genres")
      .then((res) => res.json())
      .then((data) => setGenres(["All", ...data.data])); // Include "All"
  }, []);

  // Filter songs based on selected genre
  const filteredSongs =
    selectedGenre === "All"
      ? songs
      : songs.filter((song) => song.genre.label === selectedGenre);

  return (
    <div>
      <h2>Songs</h2>
      {/* Genre Tabs */}
      <Tabs
        value={selectedGenre}
        onChange={(e, newValue) => setSelectedGenre(newValue)}
        textColor="primary"
        indicatorColor="primary"
        aria-label="songs filter tabs"
      >
        {genres.map((genre) => (
          <Tab key={genre} label={genre} value={genre} />
        ))}
      </Tabs>

      {/* Carousel for Songs */}
      <Section>
        <Carousel items={filteredSongs} isSongSection={true} />
      </Section>
    </div>
  );
};

export default Songs;

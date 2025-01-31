import React, { useEffect, useState } from "react";
import Section from "../components/Section";
import Carousel from "../components/Carousel";

const SongsSection = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Fetch songs data from API
    fetch("https://qtify-backend-labs.crio.do/songs")
      .then((response) => response.json())
      .then((data) => setSongs(data))
      .catch((error) => console.error("Error fetching songs:", error));
  }, []);

  return (
    <Section title="Songs">
      <Carousel items={songs} />
    </Section>
  );
};

export default SongsSection;

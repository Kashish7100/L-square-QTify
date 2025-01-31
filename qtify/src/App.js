import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AlbumSection from "./components/Albums/AlbumSection";
import SongsSection from "../src/components/CardComponent/Songs";
import FAQ from "./components/FAQ/FAQ";
import MusicPlayer from "./components/Player/MusicPlayer";
import "./App.css";
import { Container } from "@mui/material";
import Section from "../src/components/CardComponent/Section";
import SongSection from "../src/components/CardComponent/SongsSection";


const topAlbums = [
  { image: "album1.jpg", name: "New Bollywood", followers: "100" },
  { image: "album2.jpg", name: "New English Songs", followers: "100" }
];

const songs = [
  { image: "song1.jpg", name: "New Bollywood", likes: "100", genre: "Rock" },
  { image: "song2.jpg", name: "New English Songs", likes: "100", genre: "Pop" }
];

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      {/* <AlbumSection title="Top Albums" albums={topAlbums} />
      <AlbumSection title="New Albums" albums={topAlbums} /> */}
      <Container>
        <Section title="Top Albums" apiUrl="https://qtify-backend-labs.crio.do/albums/top" />
        <Section title="New Albums" apiUrl="https://qtify-backend-labs.crio.do/albums/new" />
        <SongSection title="Songs" apiUrl="https://qtify-backend-labs.crio.do/songs" />
        {/* <SongsSection /> */}
      </Container>
      {/* <SongsSection songs={songs} /> */}
      <FAQ />
      <MusicPlayer />
    </div>
  );
}

export default App;

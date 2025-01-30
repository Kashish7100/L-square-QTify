import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Typography } from "@mui/material";
import CardComponent from "./CardComponent";

const Section = ({ title, apiUrl }) => {
  const [albums, setAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Fetch data from API
  useEffect(() => {
    axios.get(apiUrl)
      .then(response => setAlbums(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, [apiUrl]);

  return (
    <Box sx={{ margin: "20px" }}>
      {/* Section Title and Collapse Button */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h5">{title}</Typography>
        <Button onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? "Expand" : "Collapse"}
        </Button>
      </Box>

      {/* Grid Layout for Cards */}
      {!isCollapsed && (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {albums.map((album) => (
            <CardComponent key={album.id} album={album} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Section;

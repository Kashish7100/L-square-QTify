import React from "react";
import { Card, CardMedia, CardContent, Typography, Chip } from "@mui/material";

const CardComponent = ({ album }) => {
  return (
    <Card sx={{ maxWidth: 250, borderRadius: 3, boxShadow: 3 }}>
      {/* Album Image */}
      <CardMedia
        component="img"
        height="140"
        image={album.image} // Use API data here
        alt={album.title}
        sx={{ objectFit: "cover" }}
      />

      {/* Card Content */}
      <CardContent>
        {/* Album Name */}
        <Typography variant="h6" gutterBottom>
          {album.title}
        </Typography>

        {/* Follows Count */}
        <Chip
          label={`${album.follows} Follows`}
          color="primary"
          size="small"
          sx={{ marginTop: 1 }}
        />
      </CardContent>
    </Card>
  );
};

export default CardComponent;

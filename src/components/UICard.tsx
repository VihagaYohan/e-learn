import React, { Component } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

interface propTypes {
  title: string;
  description: string;
}

const UICard = ({ title, description }: propTypes) => {
  return (
    <Card
      sx={{
        bgcolor: "white",
        //border: 1,
      }}
      elevation={2}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UICard;

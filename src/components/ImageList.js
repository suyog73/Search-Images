import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = (props) => {
  const pics = props.images.map((imga) => {
    return <ImageCard key={imga.id} imga={imga} />;
  });
  return <div className="image-list">{pics}</div>;
};

export default ImageList;

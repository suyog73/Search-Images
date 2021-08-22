import React, { useState } from "react";
import Unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

const App = () => {
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (term) => {
    const response = await Unsplash.get("/search/photos", {
      params: { query: term },
    });

    setImages(response.data.results);
    // console.log(response.data.results);
    console.log(process.env.REACT_APP_API_CLIENT_ID);
  };

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;

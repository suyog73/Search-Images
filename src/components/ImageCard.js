import React, { useEffect, useState } from "react";

const ImageCard = (props) => {
  const [state, setState] = useState("");

  const { discription, urls } = props.imga;
  const imgRef = React.createRef();

  useEffect(() => {
    imgRef.current.addEventListener("load", setSpans);
  });

  const setSpans = () => {
    const height = imgRef.current.clientHeight;

    const spans = Math.ceil(height / 10); // 10 is row width

    setState(spans);
  };

  return (
    <div style={{ gridRowEnd: `span ${state}` }}>
      <img ref={imgRef} src={urls.regular} alt={discription} />
    </div>
  );
};

export default ImageCard;

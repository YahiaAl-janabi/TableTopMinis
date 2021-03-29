import React from "react";
import "./ImageCard.css";
import duel from "./duel.jpg";

const ImageCard1 = () => {
  return (
    <div className="imagecard1div">
      <img className="imagecard1" src={duel} alt="due;" />
    </div>
  );
};

export default ImageCard1;

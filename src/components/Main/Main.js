import React from "react";
import "./Main.css";
import Slider from "../Main/ImageSlide/ImageSlide";
import MainBoutPic from "../Main/MainAboutPic/MainAboutPic";
import About1 from "./About1/About1";
const Main = () => {
  return (
    <div className="maincontainer">
      <div className="headimgviewer">
        <Slider />
      </div>
      <About1 />
      <MainBoutPic />
    </div>
  );
};

export default Main;

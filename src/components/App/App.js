import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./App.css";
import ImageViewer from "../ImageViewer/ImageViewer";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <ImageViewer />
    </div>
  );
};

export default App;

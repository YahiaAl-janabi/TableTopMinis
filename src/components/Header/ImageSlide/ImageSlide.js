import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import magnus from "./magnus.jpg";
import thunder from "./thunder.jpg";
import valdor from "./valdor.jpg";
import duel from "./duel.jpg";
import "./ImageSlide.css";
const Slider = () => {
  return (
    <AwesomeSlider className="slide">
      <div className="slideimage" data-src={magnus} />
      <div className="slideimage" data-src={thunder} />
      <div className="slideimage" data-src={valdor} />
      <div className="slideimage" data-src={duel} />
    </AwesomeSlider>
  );
};

export default Slider;

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
      <div className="photo" data-src={magnus} />
      <div className="photo" data-src={thunder} />
      <div className="photo" data-src={valdor} />
      <div className="photo" data-src={duel} />
    </AwesomeSlider>
  );
};

export default Slider;

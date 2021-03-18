import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import magnus from "./magnus.jpg";
import thunder from "./thunder.jpg";
import valdor from "./valdor.jpg";
import duel from "./duel.jpg";
import "./ImageSlide.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
const AutoplaySlider = withAutoplay(AwesomeSlider);
const Slider = () => {
  return (
    <AutoplaySlider
      className="slide"
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={4000}
    >
      <div className="photo" data-src={magnus} />
      <div className="photo" data-src={thunder} />
      <div className="photo" data-src={valdor} />
      <div className="photo" data-src={duel} />
    </AutoplaySlider>
  );
};

export default Slider;

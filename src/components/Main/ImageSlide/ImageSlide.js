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
  const imagestylevaldor = {
    width: "50%",
    height: "100%",
    marginLeft: "25%",
  };
  const imagestylemagnus = {
    width: "40%",
    height: "100%",
    marginLeft: "34%",
  };
  const imagestylethunder = {
    width: "80%",
    height: "90%",
    marginLeft: "10%",
  };

  return (
    <AutoplaySlider
      className="slide"
      play={false}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={100}
    >
      <div className="photo" data-src={thunder} style={imagestylethunder} />
      <div className="photo" data-src={magnus} style={imagestylemagnus} />
      <div className="photo" data-src={valdor} style={imagestylevaldor} />
      <div className="photo" data-src={duel} />
    </AutoplaySlider>
  );
};

export default Slider;

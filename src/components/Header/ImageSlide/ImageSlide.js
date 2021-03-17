import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import magnus from "./magnus.jpg";
import thunder from "./thunder.jpg";
import valdor from "./valdor.jpg";
import duel from "./duel.jpg";
const Slider = () => {
  return (
    <AwesomeSlider>
      <div data-src={magnus} />
      <div data-src={thunder} />
      <div data-src={valdor} />
      <div data-src={duel} />
    </AwesomeSlider>
  );
};

export default Slider;

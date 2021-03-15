import React from "react";
import { useSpring, animated } from "react-spring";
import "./Logo.css";

const calc = (x, y) => [
  -(y - window.innerHeight / 10) / 20,
  (x - window.innerWidth / 10) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Card() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 100, friction: 40 },
  }));
  return (
    <a
      href={"https://www.tabletopminis.co.uk/"}
      target="_blank"
      rel="noreferrer"
    >
      <animated.div
        class="logocard"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      />
    </a>
  );
}

export default Card;

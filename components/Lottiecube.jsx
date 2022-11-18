import Lottie from "lottie-react";
import movingCubes from "../images/moving-cubes.json";
const style = {
  height: 300,
};

const interactivity = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.2],
      type: "stop",
      frames: [0],
    },
    {
      visibility: [0.2, 0.45],
      type: "seek",
      frames: [0, 45],
    },
    {
      visibility: [0.45, 1.0],
      type: "loop",
      frames: [45, 60],
    },
  ],
};

const Example = () => {
  return (
    <Lottie
      animationData={movingCubes}
      style={style}
      interactivity={interactivity}
      loop
    />
  );
};

export default Example;
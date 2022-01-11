import React from "react";
import { ChangeArrows } from "./ChangeArrows";

const Slide = ({ slideData: sd }) => {
  const [slide, setSlide] = React.useState(0);
  return (
    <>
      <h2>{sd.label}</h2>
      <ChangeArrows progs={{ prev: 0, curr: 1, next: 2 }} />
    </>
  );
};

export default Slide;

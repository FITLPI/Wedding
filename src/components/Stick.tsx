import React, { CSSProperties } from "react";
import stickImage from "../assets/stick.png";
interface IStick {
  children?: React.ReactNode;
  rotate?: number;
}
const Stick = ({ children, rotate }: IStick) => {
  return (
    <div
      style={{ ...stickStyle, transform: `rotateZ(${90 * (rotate ?? 0)}deg)` }}
    >
      <div
        style={{
          width: "8dvw",
          height: "60dvw",

          backgroundImage: `url(${stickImage})`,
          backgroundSize: "contain",
        }}
      ></div>
      {children}
    </div>
  );
};

const stickStyle: CSSProperties = {
  width: "8dvw",
  height: "120dvw",
  position: "absolute",
  zIndex: "-1",
};
export default Stick;

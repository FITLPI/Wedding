import React, { CSSProperties } from "react";
interface IStick {
  children?: React.ReactNode;
  rotate?: number;
}
const Stick = ({ children, rotate }: IStick) => {
  return (
    <div
      style={{ ...stickStyle, transform: `rotateZ(${90 * (rotate ?? 0)}deg)` }}
    >
      {children}
    </div>
  );
};

const stickStyle: CSSProperties = {
  width: "4vw",
  height: "120vw",
  position: "absolute",
  zIndex: "9",
};
export default Stick;

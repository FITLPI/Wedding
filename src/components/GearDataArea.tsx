import React, { CSSProperties } from "react";
interface IGearDataArea {
  children?: React.ReactNode;
  isTop?: boolean;
}
const GearDataArea = ({ children, isTop }: IGearDataArea) => {
  return (
    <div
      style={{
        ...dataAreaStyle,
        top: isTop ? "90vw" : "-30vw",
        transform: isTop ? "none" : "rotateZ(180deg)",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "60vw",
          width: "60vw",
        }}
      >
        {children}
      </div>
    </div>
  );
};

const dataAreaStyle: CSSProperties = {
  height: "60vw",
  width: "60vw",
  right: "-28vw",
  position: "absolute",
};

export default GearDataArea;

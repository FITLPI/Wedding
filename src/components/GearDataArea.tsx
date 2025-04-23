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
        top: isTop ? "100dvw" : "-50dvw",
        transform: isTop ? "none" : "rotateZ(180deg)",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "70dvw",
          width: "70dvw",
        }}
      >
        {children}
      </div>
    </div>
  );
};

const dataAreaStyle: CSSProperties = {
  height: "70dvw",
  width: "70dvw",
  right: "-31dvw",
  position: "absolute",
};

export default GearDataArea;

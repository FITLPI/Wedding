import React from "react";

import gear from "../assets/gear.png";
interface IGear {
  rotate?: number;
  children?: React.ReactNode;
}
const Gear = ({ rotate, children }: IGear) => {
  return (
    <div
      style={{
        position: "relative",
        transform: `rotateZ(${(rotate ?? 0) * 90}deg)`,
        width: "80vw",
        height: "80vw",
        top: "-40vw",
        left: "-40vw",
        transition: "all 1.5s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transitionTimingFunction: "cubic-bezier(0.5, -0.02, 0.7, -0.3)",
      }}
    >
      <img src={gear} />
      {children}
    </div>
  );
};

export default Gear;

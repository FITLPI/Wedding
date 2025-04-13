import React from "react";
import withoutBridge from "../assets/withoutBridge.png";
import "../animate.css";
import { centerStyle } from "../style";
import { white } from "../assets/colors";
import Curtains from "./Curtains";

interface IScene {
  children?: React.ReactNode;
}

const Scene = ({ children }: IScene) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: white,
        overflow: "hidden",
        position: "relative",
        ...centerStyle,
      }}
    >
      <Curtains />
      <img
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          zIndex: "3",
        }}
        src={withoutBridge}
      />
      {children}
    </div>
  );
};

export default Scene;

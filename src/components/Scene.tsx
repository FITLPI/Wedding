import React from "react";
import withoutBridge from "../assets/withoutBridge.png";
import { white } from "../assets/colors";
import Curtains from "./Curtains";

interface IScene {
  children?: React.ReactNode;
}

const Scene = ({ children }: IScene) => {
  return (
    <div
      style={{
        width: "100dvw",
        height: "100dvh",
        background: white,
        overflow: "hidden",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        style={{
          position: "absolute",
          width: "100dvw",
          height: "100dvh",
          zIndex: "3",
        }}
        src={withoutBridge}
      />
      {children}
    </div>
  );
};

export default Scene;

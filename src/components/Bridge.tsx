import { CSSProperties, useEffect, useState } from "react";
import bridge from "./../assets/bridge.png";
import proposal from "../assets/proposal.png";

interface IBridge {
  rotateId: number;
}
const Bridge = ({ rotateId }: IBridge) => {
  const [visiable, setVisiable] = useState<boolean>(false);

  useEffect(() => {
    let timeOut = -1;
    if (rotateId === 3) {
      timeOut = setTimeout(() => setVisiable(true), 1000);
    }
    return () => {
      timeOut > -1 && clearTimeout(timeOut);
    };
  }, [rotateId]);
  return (
    visiable && (
      <div className="animateBridgeUp" style={conteinerStye}>
        <img src={bridge} style={{ position: "absolute", top: "-50dvw" }} />
        <div style={humanStyle}></div>
      </div>
    )
  );
};
const conteinerStye: CSSProperties = {
  position: "absolute",
  width: "100dvw",
  height: "100dvw",
  left: "0dvw",
  zIndex: "5",
};

const humanStyle: CSSProperties = {
  position: "absolute",
  width: "60dvw",
  height: "60dvw",
  left: "22dvw",
  top: "-34dvw",
  zIndex: "5",
  backgroundImage: `url(${proposal})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
};

export default Bridge;

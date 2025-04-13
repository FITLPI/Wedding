import { CSSProperties, useEffect, useState } from "react";
import bridge from "./../assets/bridge.png";

interface IBridge {
  rotateId: number;
}
const Bridge = ({ rotateId }: IBridge) => {
  const [visiable, setVisiable] = useState<boolean>(false);

  useEffect(() => {
    if (rotateId === 3) {
      setTimeout(() => setVisiable(true), 1000);
    }
  }, [rotateId]);
  return (
    visiable && (
      <div className="animateBridgeUp" style={conteinerStye}>
        <img src={bridge} style={{ position: "absolute", top: "-50vw" }} />
      </div>
    )
  );
};
const conteinerStye: CSSProperties = {
  position: "absolute",
  width: "100vw",
  height: "100vw",
  left: "0vw",
  bottom: "-5vh",
  zIndex: "10",
};

export default Bridge;

import { CSSProperties } from "styled-components";
import boat from "../assets/boat.png";
import karma from "../assets/karma.png";
import simpleBoy from "../assets/simpleBoy.png";
import simpleGirl from "../assets/simpleGirl.png";
interface IBoat {
  rotateId?: number;
}
const Boat = ({ rotateId }: IBoat) => {
  return (
    rotateId !== 3 && (
      <div>
        <div
          className={rotateId === 2 ? "moveBoat" : ""}
          style={{
            background: `url(${boat})`,
            ...boatStyle,
          }}
        ></div>
        <div
          className={rotateId === 2 ? "moveBoat" : ""}
          style={{
            background: `url(${simpleBoy})`,
            ...humanStyle,
            top: "105dvw",
            left: "25dvw",
          }}
        ></div>
        <div
          className={rotateId === 2 ? "moveBoat" : ""}
          style={{
            background: `url(${simpleGirl})`,
            ...humanStyle,
            top: "105dvw",
            left: "50dvw",
          }}
        ></div>
        <div
          className={rotateId === 2 ? "moveBoat" : ""}
          style={{
            background: `url(${karma})`,
            ...boatStyle,
          }}
        ></div>
      </div>
    )
  );
};

const boatStyle: CSSProperties = {
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  width: "65dvw",
  height: "65dvw",
  position: "absolute",
  top: "100dvw",
  left: "18dvw",
  zIndex: "5",
};

const humanStyle: CSSProperties = {
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  width: "45dvw",
  height: "45dvw",
  position: "absolute",
  zIndex: "5",
};

export default Boat;

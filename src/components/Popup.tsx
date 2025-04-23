import { CSSProperties } from "styled-components";
import backPopup from "../assets/backPopup.png";
import rope from "../assets/rope.png";
import cloud from "../assets/cloud4.png";
import map from "../assets/map.png";
import map2 from "../assets/map2.png";
import Enters from "./Enters";
interface IPopup {
  visiable: boolean;
}
const Popup = ({ visiable }: IPopup) => {
  return (
    visiable && (
      <div
        style={{
          position: "absolute",
          width: "100dvw",
          height: "100dvh",
          zIndex: "10",
        }}
      >
        <div className="animateDropPopup" style={placePopup}>
          <Map />
          <Clouds />
        </div>
      </div>
    )
  );
};

const Clouds = (): React.ReactElement => (
  <>
    <div
      style={{
        position: "absolute",
        left: "12dvw",
        top: "-89.4dvw",
        width: "60dvw",
        height: "90dvw",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <img key={1} src={rope} style={{ width: "30dvw", height: "90dvw" }} />
      <img key={2} src={rope} style={{ width: "30dvw", height: "90dvw" }} />
    </div>
    <div
      style={{
        width: "48dvw",
        height: "35dvw",
        ...cloudStyle,
        top: "12dvw",
        left: "38dvw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p style={{ fontSize: "5dvw", fontStyle: "italic" }}>
        Начало в 16:00<br></br>
        <Enters count={7} />у ЗАГСа
      </p>
    </div>
    <div
      style={{
        width: "50dvw",
        height: " 34dvw",
        ...cloudStyle,
        top: "-10dvw",
        left: "-2dvw",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <p style={{ fontSize: "4.5dvw", fontStyle: "italic" }}>
        <Enters count={8} />
        Осталось дней <br></br>
        <Enters count={13} />
        до свадьбы:
      </p>
    </div>
    <div
      style={{
        width: "30dvw",
        height: "20dvw",
        ...cloudStyle,
        top: "5dvw",
        left: "27dvw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p style={{ fontSize: "8dvw", fontStyle: "italic" }}>
        {Math.floor(
          (new Date(2025, 7, 7).getTime() - new Date().getTime()) / 86400000
        )}
      </p>
    </div>
    <div
      style={{
        width: "48dvw",
        height: "35dvw",
        ...cloudStyle,
        top: "21dvw",
        left: "-1dvw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "-1",
      }}
    >
      <p style={{ fontSize: "5dvw", fontStyle: "italic" }}>
        Далее в 17:00<br></br>
        <Enters count={7} />
        банкет
      </p>
    </div>
    <div
      style={{
        width: "54dvw",
        height: "36dvw",
        ...cloudStyle,
        top: "96dvw",
        left: "36dvw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p style={{ fontSize: "5dvw", fontStyle: "italic" }}>
        <Enters count={7} />
        ПРИНЯТЬ<br></br>
        ПРИГЛОШЕНИЕ
      </p>
    </div>
  </>
);
const Map = (): React.ReactElement => (
  <div>
    <div
      style={{
        width: "80dvw",
        height: "25dvw",
      }}
    ></div>
    <div
      style={{
        width: "80dvw",
        height: "40dvw",
        backgroundImage: `url(${map2})`,
        backgroundPosition: "center",
        backgroundSize: "101% 101%",
        backgroundRepeat: "no-repeat",
        border: "0.5dvw solid grey ",
      }}
      onClick={() => {
        window.open(
          "https://yandex.ru/maps?rtext=59.864153%2C30.336202~59.862850%2C30.321325&rtt=mt"
        );
      }}
    ></div>

    <p>нажмите чтобы открыть в приложении</p>
  </div>
);

const placePopup: CSSProperties = {
  position: "absolute",
  width: "84dvw",
  height: "120dvw",
  top: "27dvh",
  left: "8dvw",
  zIndex: "6",
  backgroundImage: `url(${backPopup})`,
  backgroundPosition: "center",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  animationDelay: "4s",
  animationFillMode: "backwards",
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
};

const cloudStyle: CSSProperties = {
  backgroundImage: `url(${cloud})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  position: "absolute",
};

export default Popup;

import { CSSProperties } from "styled-components";
import backPopup from "../assets/backPopup.png";
import rope from "../assets/rope.png";
import cloud from "../assets/cloud4.png";
import map2 from "../assets/map2.png";
import Enters from "./Enters";
import { useState } from "react";
interface IPopup {
  visiable: boolean;
  accept?: () => void;
}
const Popup = ({ visiable, accept }: IPopup) => {
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
          <Clouds accept={accept} />
        </div>
      </div>
    )
  );
};

interface IClouds {
  accept?: () => void;
}
const Clouds = ({ accept }: IClouds): React.ReactElement => {
  const [isClick, setIsClick] = useState<boolean>(false);

  return (
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
          width: "84dvw",
          height: "67dvw",
          ...cloudStyle,
          top: "0dvw",
          left: "4dvw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: "rotateY(180deg)",
        }}
      >
        <p
          style={{
            fontSize: "6dvw",
            fontStyle: "italic",
            textAlign: "center",
            transform: "rotateY(180deg)",
          }}
        >
          16:00 - Церемония в ЗАГСе
          <br></br>17:00 - Банкет
        </p>
      </div>
      <div
        style={{
          width: "50dvw",
          height: " 34dvw",
          ...cloudStyle,
          top: "-7dvw",
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
          top: "8dvw",
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
          width: "54dvw",
          height: "36dvw",
          ...cloudStyle,
          top: "96dvw",
          left: "36dvw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: !isClick
            ? "tiltShaking 1250ms linear 5s infinite"
            : "jump 1.5s linear",
        }}
        onClick={() => {
          //accept && accept();
          setIsClick(true);
        }}
      >
        <p style={{ fontSize: "5dvw", fontStyle: "italic" }}>
          {isClick ? (
            <>ПРИНЯТО</>
          ) : (
            <>
              <Enters count={7} />
              ПРИНЯТЬ<br></br>
              ПРИГЛАШЕНИЕ
            </>
          )}
        </p>
      </div>
    </>
  );
};

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
        border: "0.5dvw solid white ",
        borderRadius: "4dvw",
      }}
      onClick={() => {
        window.open(
          "https://yandex.ru/maps?rtext=59.864153%2C30.336202~59.862850%2C30.321325&rtt=mt"
        );
      }}
    ></div>

    <p
      style={{
        textAlign: "end",
      }}
    >
      нажмите чтобы открыть в приложении*
    </p>
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

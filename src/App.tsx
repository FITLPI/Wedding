import { useLayoutEffect, useState } from "react";
import Scene from "./components/Scene";
import Triger from "./components/Triger";
import { CSSProperties } from "styled-components";
import Gear from "./components/Gear";
import Stick from "./components/Stick";
import GearDataArea from "./components/GearDataArea";
import cloud from "./assets/cloud4.png";
import sun from "./assets/sun.png";
import Calendar from "./components/Calendar";
import Bridge from "./components/Bridge";

function App() {
  const [name, setName] = useState("Default");
  const [rotate, setRotate] = useState<number>(0);
  const [isDisable, setIsDisable] = useState<boolean>(true);

  useLayoutEffect(() => {
    setName(
      decodeURIComponent(
        window.location.href
          .split("/")
          .reverse()
          .find(() => true) ?? ""
      )
    );
    // setTimeout(() => {
    //   setRotate((prev) => ++prev);
    //   setIsDisable(false);
    // }, 2500);
  }, []);

  return (
    <Scene>
      <Triger onClick={() => setRotate((prev) => ++prev)} isDisable={false} />
      <div style={containerStyle}>
        <Gear rotate={rotate}>
          <Stick>
            <GearDataArea key={1} isTop />
            <GearDataArea key={3}>
              <img
                style={{
                  position: "absolute",
                  zIndex: "1",
                  left: "0vw",
                  top: "-10vw",
                }}
                src={cloud}
              />
              <img
                style={{
                  position: "absolute",
                  zIndex: "2",
                  left: "15vw",
                  top: "0vw",
                }}
                src={cloud}
              />
              <img
                style={{
                  position: "absolute",
                  zIndex: "3",
                  left: "-18vw",
                  top: "4vw",
                }}
                src={sun}
              />
            </GearDataArea>
          </Stick>
          <Stick rotate={1}>
            <GearDataArea key={2}>
              <img
                src={cloud}
                style={{
                  position: "absolute",
                  left: "20vw",
                  top: "20vw",
                  zIndex: "2",
                }}
              />
              <h1>Шлюха и Шлюшара</h1>
              <img
                src={cloud}
                style={{
                  position: "absolute",
                  left: "-20vw",
                  top: "10vw",
                  zIndex: "1",
                }}
              />
            </GearDataArea>
            <GearDataArea key={4} isTop />
          </Stick>
        </Gear>
        <Calendar rotateId={rotate} />
      </div>
      <Bridge rotateId={rotate} />
    </Scene>
  );
}

const containerStyle: CSSProperties = {
  position: "absolute",
  zIndex: "9",
  left: "50%",
};

export default App;

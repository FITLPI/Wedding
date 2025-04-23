import { useEffect, useLayoutEffect, useState } from "react";
import Scene from "./components/Scene";
import Triger from "./components/Triger";
import { CSSProperties } from "styled-components";
import Gear from "./components/Gear";
import Stick from "./components/Stick";
import GearDataArea from "./components/GearDataArea";
import cloud from "./assets/cloud4.png";
import Calendar from "./components/Calendar";
import Bridge from "./components/Bridge";
import Enters from "./components/Enters";
import Cup from "./components/Cup";
import Popup from "./components/Popup";
import Curtains from "./components/Curtains";

function App() {
  const [name, setName] = useState<{
    first?: string;
    last?: string;
    firstEnter?: number;
    lastEnter?: number;
  }>({});
  const [rotate, setRotate] = useState<number>(0);
  const [isDisable, setIsDisable] = useState<boolean>(true);
  const [visiable, setVisiable] = useState<boolean>(false);

  useLayoutEffect(() => {
    setName(() => {
      let names = decodeURIComponent(
        window.location.pathname.split("/")[1]
      ).split("NL");
      console.log(names);
      return {
        firstEnter: +names[0],
        first: names[1] ?? "",
        lastEnter: +names[2],
        last: names[3] ?? "",
      };
    });
    const timeOut = setTimeout(() => {
      setRotate((prev) => ++prev);
    }, 2500);
    const timeOutDisable = setTimeout(() => setIsDisable(false), 4500);
    return () => {
      clearTimeout(timeOut);
      clearTimeout(timeOutDisable);
    };
  }, []);

  useEffect(() => {
    let timeOut = -1;
    if (rotate == 3) {
      timeOut = setTimeout(() => setVisiable(true), 1000);
    }
    return () => {
      timeOut > -1 && clearTimeout(timeOut);
    };
  }, [rotate]);

  return (
    <Scene>
      <Triger
        onClick={() => {
          setRotate((prev) => ++prev);
          setIsDisable(true);
        }}
        isDisable={isDisable}
        visiable={!visiable}
      />
      <div style={containerStyle}>
        <Gear rotate={rotate}>
          <Stick>
            <GearDataArea key={1} isTop />
            <GearDataArea key={3}>
              {[2, 3].includes(rotate) && (
                <>
                  <div
                    style={{
                      zIndex: "1",
                      left: "0dvw",
                      top: "0dvw",
                      ...cloudStyle,
                    }}
                  ></div>
                  <div
                    style={{
                      zIndex: "1",
                      left: "-25dvw",
                      top: "10dvw",
                      position: "absolute",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "65dvw",
                        height: "50dvw",
                        backgroundImage: `url(${cloud})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Cup afterLoad={() => setIsDisable(false)} />
                    </div>
                  </div>
                </>
              )}
            </GearDataArea>
          </Stick>
          <Stick rotate={1}>
            <GearDataArea key={2}>
              {[1, 2].includes(rotate) && (
                <>
                  <div
                    style={{
                      left: "18dvw",
                      top: "14dvw",
                      zIndex: "2",
                      justifyContent: "center",
                      paddingBottom: "3dvw",
                      ...cloudStyle,
                    }}
                  >
                    <h1>
                      &emsp;Приглашаем<br></br>Вас на нашу свадьбу
                    </h1>
                  </div>
                  <div
                    style={{
                      left: "-15dvw",
                      top: "-1dvw",
                      ...cloudStyle,
                      zIndex: "1",
                      justifyContent: "start",
                      paddingBottom: "3dvw",
                    }}
                  >
                    <h1>
                      <Enters count={name.firstEnter ?? 0} />
                      {name.first}
                      <br></br>
                      <Enters count={name.lastEnter ?? 0} />
                      {name.last}
                    </h1>
                  </div>
                </>
              )}
            </GearDataArea>
            <GearDataArea key={4} isTop />
          </Stick>
        </Gear>
        <Calendar rotateId={rotate} />
      </div>
      <Curtains isOpen={!visiable} />
      <Bridge rotateId={rotate} />
      <Popup visiable={visiable} />
    </Scene>
  );
}

const containerStyle: CSSProperties = {
  position: "absolute",
  zIndex: "9",
  left: "50%",
};

const cloudStyle: CSSProperties = {
  position: "absolute",
  width: "65dvw",
  height: "50dvw",
  backgroundImage: `url(${cloud})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
};

export default App;

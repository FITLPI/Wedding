import { CSSProperties } from "styled-components";
import calendarImage from "../assets/calendar.png";
import calendarWithHeart from "../assets/CalendarWithHeart.png";
import rope from "../assets/rope.png";
import heart from "../assets/heart.png";
import { useEffect, useState } from "react";
interface ICalendar {
  rotateId: number;
}
const Calendar = ({ rotateId }: ICalendar) => {
  const [visiable, setVisiable] = useState<boolean>(false);
  const [visiableHeart, setVisiableHeart] = useState<boolean>(false);

  const [className, setClassName] = useState<string>("animateDrop");

  useEffect(() => {
    let timeOut = -1;
    let heartTimeOut = -1;
    if (rotateId === 2) {
      timeOut = setTimeout(() => setVisiable(true), 1000);
      heartTimeOut = setTimeout(() => setVisiableHeart(true), 8400);
    }
    if (rotateId === 3) {
      setClassName("animateUp");
      timeOut = setTimeout(() => setVisiable(false), 1900);
    }
    return () => {
      timeOut > -1 && clearTimeout(timeOut);
      heartTimeOut > -1 && clearTimeout(heartTimeOut);
    };
  }, [rotateId]);
  return (
    visiable && (
      <div className={className} style={conteinerStye}>
        <div
          style={{
            width: "60dvw",
            height: "90dvw",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <img src={rope} style={{ width: "30dvw", height: "90dvw" }} />
          <img src={rope} style={{ width: "30dvw", height: "90dvw" }} />
        </div>
        <div
          style={{
            ...calendarStyle,
            backgroundImage: `url(${calendarImage})`,
          }}
        ></div>
        {visiableHeart && (
          <div
            style={{
              ...calendarStyle,
              backgroundImage: `url(${calendarWithHeart})`,
              position: "absolute",
              top: "90dvw",
            }}
          >
            <div
              className="animateScaleHeart"
              style={{
                position: "absolute",
                backgroundSize: "contain",
                backgroundImage: `url(${heart})`,
              }}
            ></div>
          </div>
        )}
      </div>
    )
  );
};

const conteinerStye: CSSProperties = {
  position: "absolute",
  width: "60dvw",
  height: "150dvw",
  left: "-30dvw",
  top: "0",
  zIndex: "-5",
};

const calendarStyle: CSSProperties = {
  width: "60dvw",
  height: "60dvw",
  backgroundSize: "contain",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export default Calendar;

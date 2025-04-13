import { CSSProperties } from "styled-components";
import calendarImage from "../assets/calendar.png";
import rope from "../assets/rope.png";
import { useEffect, useState } from "react";
interface ICalendar {
  rotateId: number;
}
const Calendar = ({ rotateId }: ICalendar) => {
  const [visiable, setVisiable] = useState<boolean>(false);
  const [className, setClassName] = useState<string>("animateDrop");

  useEffect(() => {
    if (rotateId === 2) {
      setTimeout(() => setVisiable(true), 1000);
    }
    if (rotateId === 3) {
      setClassName("animateUp");
      setTimeout(() => setVisiable(false), 1900);
    }
  }, [rotateId]);
  return (
    visiable && (
      <div className={className} style={conteinerStye}>
        <div
          style={{
            width: "60vw",
            height: "90vw",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <img src={rope} style={{ width: "30vw", height: "90vw" }} />
          <img src={rope} style={{ width: "30vw", height: "90vw" }} />
        </div>
        <img src={calendarImage} style={{ width: "60vw", height: "60vw" }} />
        <div className="spotlight"></div>
      </div>
    )
  );
};

const conteinerStye: CSSProperties = {
  position: "absolute",
  width: "60vw",
  height: "150vw",
  left: "-30vw",
  top: "0",
  zIndex: "-5",
};
export default Calendar;

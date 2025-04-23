import { useEffect, useState } from "react";
import cup from "../assets/cupWithoutRowCrop.png";
import row from "../assets/row.png";
interface ICup {
  afterLoad: () => void;
}
const Cup = ({ afterLoad }: ICup) => {
  const [isVisiableRow, setIsVisiableRow] = useState<boolean>(true);
  const [className, setClassName] = useState<string>("animateRowUp");
  useEffect(() => {
    const timeOutRow = setTimeout(() => setClassName("animateRowMove"), 6000);
    const timeOutRowHide = setTimeout(() => {
      setIsVisiableRow(false);
      afterLoad();
    }, 8500);
    return () => {
      clearTimeout(timeOutRow);
      clearTimeout(timeOutRowHide);
    };
  }, []);
  return (
    <>
      <div
        className="animateCupUp"
        style={{
          position: "absolute",
          zIndex: "-2",
          width: "50dvw",
          height: "50dvw",
          transform: "rotateZ(7deg)",
          backgroundImage: `url(${cup})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      {isVisiableRow && (
        <>
          <div
            className={className}
            style={{
              position: "absolute",
              zIndex: "-1",
              width: "25dvw",
              height: "25dvw",
              backgroundImage: `url(${row})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className={className + 1}
            style={{
              position: "absolute",
              zIndex: "-1",
              width: "25dvw",
              height: "25dvw",
              backgroundImage: `url(${row})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              opacity: "0.5",
            }}
          ></div>
          <div
            className={className + 2}
            style={{
              position: "absolute",
              zIndex: "-1",
              width: "25dvw",
              height: "25dvw",
              backgroundImage: `url(${row})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              opacity: "0.25",
            }}
          ></div>
        </>
      )}
    </>
  );
};

export default Cup;

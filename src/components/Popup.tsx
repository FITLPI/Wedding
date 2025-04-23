import backPopup from "../assets/backPopup.png";
import rope from "../assets/rope.png";
interface IPopup {
  visiable: boolean;
}
const Popup = ({ visiable }: IPopup) => {
  return (
    visiable && (
      <div
        //className="animateBlur"
        style={{
          position: "absolute",
          width: "100dvw",
          height: "100dvh",
          zIndex: "10",
        }}
      >
        <div
          className="animateDropPopup"
          style={{
            position: "absolute",
            width: "84dvw",
            height: "120dvw",
            top: "20dvh",
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
          }}
        >
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
            <img src={rope} style={{ width: "30dvw", height: "90dvw" }} />
            <img src={rope} style={{ width: "30dvw", height: "90dvw" }} />
          </div>
          <p>
            До свадьбы осталось{" "}
            {Math.floor(
              (new Date(2025, 7, 7).getTime() - new Date().getTime()) / 86400000
            )}
            {" дней"}
          </p>
          <button>
            <p>приянть</p>
          </button>
        </div>
      </div>
    )
  );
};

export default Popup;

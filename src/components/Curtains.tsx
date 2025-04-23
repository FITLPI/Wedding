import topShtori from ".././assets/topShtori.png";
import middleAndTopShtori from ".././assets/middleAndTopShtori.png";
import leftCurtains from ".././assets/leftCurtains.png";
import rightСurtains from ".././assets/rightСurtains.png";
interface ICurtains {
  isOpen: boolean;
}
const Curtains = ({ isOpen }: ICurtains) => {
  return (
    <>
      <img
        style={{
          width: "100dvw",
          position: "absolute",
          zIndex: "11",
        }}
        src={topShtori}
      />
      <img
        style={{
          width: "100dvw",
          position: "absolute",
          zIndex: "7",
        }}
        src={middleAndTopShtori}
      />
      <img
        style={{
          width: "100dvw",
          height: "100dvh",
          position: "absolute",
          zIndex: "10",
          backgroundSize: "cover",
        }}
        src={leftCurtains}
        className={isOpen ? "animateMoveLeft" : "animateMoveLeftBack "}
      />
      <img
        style={{
          width: "100dvw",
          height: "100dvh",
          position: "absolute",
          zIndex: "10",
          backgroundSize: "cover",
        }}
        src={rightСurtains}
        className={isOpen ? "animateMoveRight" : "animateMoveRightBack "}
      />
    </>
  );
};

export default Curtains;

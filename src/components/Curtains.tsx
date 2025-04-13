import topShtori from ".././assets/topShtori.png";
import middleAndTopShtori from ".././assets/middleAndTopShtori.png";
import leftCurtains from ".././assets/leftCurtains.png";
import rightСurtains from ".././assets/rightСurtains.png";

const Curtains = () => {
  return (
    <>
      <img
        style={{
          width: "100vw",
          position: "absolute",
          zIndex: "11",
        }}
        src={topShtori}
      />
      <img
        style={{
          width: "100vw",
          position: "absolute",
          zIndex: "7",
        }}
        src={middleAndTopShtori}
      />
      <img
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          zIndex: "10",
          backgroundSize: "cover",
        }}
        src={leftCurtains}
        className="animateMoveLeft"
      />
      <img
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          zIndex: "10",
          backgroundSize: "cover",
        }}
        src={rightСurtains}
        className="animateMoveRight"
      />
    </>
  );
};

export default Curtains;

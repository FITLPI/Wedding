interface ITriger {
  onClick?: () => void;
  isDisable?: boolean;
  visiable?: boolean;
}
const Triger = ({ isDisable, onClick, visiable }: ITriger) => {
  return (
    visiable && (
      <div
        onClick={() => !isDisable && onClick && onClick()}
        style={{
          position: "absolute",
          zIndex: "12",
          width: "100dvw",
          height: "100dvh",
        }}
      >
        {!isDisable && (
          <div
            className="animateMessage"
            style={{
              position: "absolute",
              width: "100dvw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "7dvw",
              padding: "2dvh 0dvh",
            }}
          >
            <p>нажмите чтобы продолжить</p>
          </div>
        )}
      </div>
    )
  );
};

export default Triger;

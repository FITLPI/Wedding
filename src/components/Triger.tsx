interface ITriger {
  onClick?: () => void;
  isDisable?: boolean;
}
const Triger = ({ isDisable, onClick }: ITriger) => {
  return (
    <div
      onClick={() => !isDisable && onClick && onClick()}
      style={{
        position: "absolute",
        zIndex: "11",
        width: "100vw",
        height: "100vh",
      }}
    ></div>
  );
};

export default Triger;

interface IEnters {
  count: number;
}
const Enters = ({ count }: IEnters) => {
  return (
    !isNaN(count) &&
    Array(count)
      .fill("")
      .map((_, i) => <span key={i}>&nbsp;</span>)
  );
};

export default Enters;

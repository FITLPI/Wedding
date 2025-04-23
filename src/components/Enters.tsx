interface IEnters {
  count: number;
}
const Enters = ({ count }: IEnters) => {
  return (
    !isNaN(count) &&
    Array(count)
      .fill("")
      .map(() => <>&nbsp;</>)
  );
};

export default Enters;

const Counter = ({
  counter,
  handleClickPlus,
  handleClickMinus,
  handleReset,
  index,
}) => {
  return (
    <div className="counter">
      <button
        onClick={() => {
          handleClickMinus(index);
        }}
      >
        -
      </button>
      <p>{counter}</p>
      <button
        onClick={() => {
          handleClickPlus(index);
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          handleReset(index);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;

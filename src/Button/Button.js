const Button = ({ text, click, isDisabled }) => {
  return (
    <button onClick={click} disabled={isDisabled}>
      {text}
    </button>
  );
};

export default Button;

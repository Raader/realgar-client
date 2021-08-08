const RadioInput = ({ children, value, name }) => {
  return (
    <label>
      <input type="radio" value={value} name={name}></input>
      <span className="ml-1 text-gray-700 text-lg">{children}</span>
    </label>
  );
};

export default RadioInput;

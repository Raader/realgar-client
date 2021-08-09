const RadioInput = ({ children, value, name, onChange }) => {
  return (
    <label>
      <input type="radio" value={value} name={name} onChange={onChange}></input>
      <span className="ml-1 text-gray-700 text-lg">{children}</span>
    </label>
  );
};

export default RadioInput;

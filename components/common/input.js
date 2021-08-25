const Input = ({ placeholder, type, id, value, onChange, disabled }) => {
  return (
    <input
      id={id}
      className="appearance-none rounded-md p-2 block w-full border-2 border-gray-300 focus:border-green-400 outline-none transition duration-200 disabled:opacity-50"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
    ></input>
  );
};

export default Input;

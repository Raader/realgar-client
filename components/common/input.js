const Input = ({ placeholder, type, id, value, onChange }) => {
  return (
    <input
      id={id}
      className="appearance-none rounded-md p-2 block w-full border-2 border-gray-300 focus:border-green-400 outline-none transition duration-200"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    ></input>
  );
};

export default Input;

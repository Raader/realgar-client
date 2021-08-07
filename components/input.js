const Input = ({ placeholder, type }) => {
  return (
    <input
      className="appearance-none rounded-md p-2 block w-full border-2 border-gray-300 focus:border-green-400 outline-none transition duration-200"
      placeholder={placeholder}
      type={type}
    ></input>
  );
};

export default Input;

const PrimaryButton = ({ children, onClick, block, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`appearance-none bg-green-400 px-4 py-2 rounded-md hover:bg-green-500 transition duration-200 border font-semibold text-white  ${
        block ? "block w-full" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;

const Button = ({ children, onClick, block, className }) => {
  return (
    <button
      onClick={onClick}
      className={
        `appearance-none bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-200 border font-semibold ${
          block ? "block w-full" : ""
        } ` + className
      }
    >
      {children}
    </button>
  );
};

export default Button;

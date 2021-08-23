import Button from "./button";

const PrimaryButton = ({ children, className, block, ...props }) => {
  return (
    <button
      className={
        `appearance-none text-white bg-green-400 px-4 py-2 rounded-md hover:bg-green-500 transition duration-200 font-semibold select-none${
          block ? "block w-full" : ""
        } ` + className
      }
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;

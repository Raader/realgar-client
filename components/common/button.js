import { overrideTailwindClasses } from "tailwind-override";

const Button = ({ children, onClick, block, className, type, ...props }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={overrideTailwindClasses(
        `appearance-none bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-200 font-semibold no-highlight ${
          block ? "block w-full" : ""
        } ${className}`
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

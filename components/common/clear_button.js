import Button from "./button";
import { overrideTailwindClasses } from "tailwind-override";

const ClearButton = ({ className, children, ...props }) => {
  return (
    <Button
      className={overrideTailwindClasses(
        `bg-transparent hover:!bg-gray-100 border-none block w-full text-left text-gray-600 hover:text-gray-800 ${className}`
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ClearButton;

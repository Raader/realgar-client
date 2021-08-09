import Button from "./button";

const PrimaryButton = ({ children, className, ...props }) => {
  return (
    <Button
      className={"bg-green-500 hover:bg-green-400 text-white" + " " + className}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;

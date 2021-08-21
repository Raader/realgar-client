import Button from "./button";

const PrimaryButton = ({ children, className, ...props }) => {
  return (
    <Button
      className={"bg-green-400 hover:bg-green-500 text-white" + " " + className}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;

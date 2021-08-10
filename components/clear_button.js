import Button from "./button";

const ClearButton = ({ className, children, props }) => {
  return (
    <Button
      className={
        "bg-transparent hover:bg-gray-100 border-none block w-full" +
        " " +
        className
      }
    >
      {children}
    </Button>
  );
};

export default ClearButton;

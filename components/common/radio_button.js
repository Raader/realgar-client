import Button from "./button";

const RadioButton = ({ options, onChange, value }) => {
  return (
    <div className="flex space-x-1 bg-gray-200 p-1 rounded-md w-auto">
      {options.map((option) => (
        <Button
          key={option.value}
          onClick={() => onChange?.(option.value)}
          className={`border-none ${
            option.value === value
              ? "bg-white hover:bg-white"
              : "bg-transparent hover:bg-gray-100"
          } py-2 px-0 flex-grow rounded-md`}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};

export default RadioButton;

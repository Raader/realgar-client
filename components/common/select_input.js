const SelectInput = ({ options, onChange, value }) => {
  return (
    <div className="flex space-x-2 w-full overflow-auto py-2 px-2 items-center border-2 rounded-md bg-white">
      {options.map((option) => (
        <div
          onClick={() => onChange?.(option.value)}
          key={option.value}
          className={`${
            value === option.value ? "ring ring-green-400  bg-green-200" : ""
          } p-1 cursor-pointer transition duration-200 rounded-md`}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default SelectInput;

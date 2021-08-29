const Label = ({ children, forId, className }) => {
  return (
    <label
      className={"font-semibold text-xl text-gray-600" + " " + className}
      htmlFor={forId}
    >
      {children}
    </label>
  );
};

export default Label;

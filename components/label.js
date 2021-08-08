const Label = ({ children, forId, className }) => {
  return (
    <label
      className={"font-semibold text-lg text-gray-700" + " " + className}
      for={forId}
    >
      {children}
    </label>
  );
};

export default Label;

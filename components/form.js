const Form = ({ children, className, onSubmit }) => {
  return (
    <div
      className={"flex flex-col space-y-3" + " " + className}
      onSubmit={onSubmit}
    >
      {children}
    </div>
  );
};

export default Form;

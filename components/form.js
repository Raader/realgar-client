const Form = ({ children, className }) => {
  return (
    <div className={"flex flex-col space-y-3" + " " + className}>
      {children}
    </div>
  );
};

export default Form;

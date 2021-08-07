const Card = ({ children, className }) => {
  return (
    <div
      className={"rounded-md bg-white p-5 shadow-lg w-full" + " " + className}
    >
      {children}
    </div>
  );
};

export default Card;

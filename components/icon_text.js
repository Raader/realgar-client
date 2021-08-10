const IconText = ({ icon, children }) => {
  return (
    <div className="flex flex-row items-center">
      {icon}
      <div className="ml-1">{children}</div>
    </div>
  );
};

export default IconText;

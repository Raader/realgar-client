const IconText = ({ icon, children, className }) => {
  return (
    <div className="flex flex-row items-center">
      {icon}
      <div className={`ml-1 ${className}`}>{children}</div>
    </div>
  );
};

export default IconText;

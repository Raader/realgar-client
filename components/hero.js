const Hero = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center px-4 lg:px-8 py-8 gap-4">
      {children}
    </div>
  );
};

export default Hero;

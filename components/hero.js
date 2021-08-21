const Hero = ({ children }) => {
  return (
    <div className="flex flex-col items-center px-4 lg:px-8 space-y-4 h-full">
      {children}
    </div>
  );
};

export default Hero;

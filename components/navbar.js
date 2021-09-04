const Navbar = ({ children, dropShadow = true }) => {
  return (
    <nav
      className={`bg-white py-1 px-4 md:py-4 drop-shadow ${
        dropShadow ? "lg:drop-shadow" : "lg:drop-shadow-none"
      } bg-opacity-90 backdrop-blur`}
    >
      <div className="container mx-auto flex flex-row flex-nowrap items-center md:px-4">
        {children}
      </div>
    </nav>
  );
};

export default Navbar;

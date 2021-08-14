const Navbar = ({ children }) => {
  return (
    <nav className="bg-white sticky top-0 py-1 px-1 md:px-10 md:py-4 z-10">
      <div className="container mx-auto flex flex-row flex-nowrap items-center md:px-4">
        {children}
      </div>
    </nav>
  );
};

export default Navbar;

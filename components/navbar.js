const Navbar = ({ children }) => {
  return (
    <nav className="border-b bg-white sticky top-0 py-3 px-2 md:px-10 md:py-4">
      <div className="container mx-auto flex flex-row flex-nowrap items-center md:px-4">
        {children}
      </div>
    </nav>
  );
};

export default Navbar;

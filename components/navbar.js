const Navbar = ({ children }) => {
  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="container mx-auto flex flex-row flex-nowrap items-center py-4 px-2 md:px-10">
        {children}
      </div>
    </nav>
  );
};

export default Navbar;

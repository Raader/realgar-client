const Navbar = ({ children }) => {
  return (
    <nav className="flex flex-row flex-nowrap items-center py-4 px-2 md:px-10 border-b bg-white shadow-sm">
      {children}
    </nav>
  );
};

export default Navbar;

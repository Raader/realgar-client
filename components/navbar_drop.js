const NavbarDrop = ({ children, open }) => {
  return (
    <div
      className="w-full bg-white overflow-hidden transition-all duration-500 lg:hidden border-b"
      style={open ? { maxHeight: "150px" } : { maxHeight: "0px" }}
    >
      {children}
    </div>
  );
};

export default NavbarDrop;

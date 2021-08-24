import { Children } from "react";

const NavbarDrop = ({ children, open, extended }) => {
  return (
    <div
      className="w-full bg-white overflow-hidden transition-all duration-500 lg:hidden"
      style={
        open
          ? {
              maxHeight: `${
                (Children.count(children) + extended + 1) * 40 + 5
              }px`,
            }
          : { maxHeight: "0px" }
      }
    >
      {children}
    </div>
  );
};

export default NavbarDrop;

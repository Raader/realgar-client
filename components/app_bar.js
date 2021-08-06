import Brand from "./brand";
import Navbar from "./navbar";
import NavbarEnd from "./navbar_end";
import NavbarStart from "./navbar_start";
import NavLink from "./nav_link";
import {
  HomeIcon,
  InformationCircleIcon,
  MenuIcon,
  ViewBoardsIcon,
} from "@heroicons/react/solid";
import MenuDropdown from "./menu_dropdown";

const AppBar = () => {
  return (
    <Navbar>
      <Brand></Brand>
      <NavbarStart>
        <NavLink icon={<HomeIcon className="h-5 w-5"></HomeIcon>}>Home</NavLink>
        <NavLink
          icon={
            <InformationCircleIcon className="h-5 w-5"></InformationCircleIcon>
          }
        >
          About
        </NavLink>
        <NavLink icon={<ViewBoardsIcon className="h-5 w-5"></ViewBoardsIcon>}>
          Dashboard
        </NavLink>
      </NavbarStart>
      <NavbarEnd>
        <div>
          <NavLink>Login</NavLink>
        </div>
        <div className="bg-gray-400 bg-opacity-10 rounded-md whitespace-nowrap">
          <NavLink>Sign Up</NavLink>
        </div>
      </NavbarEnd>
      <div className="lg:hidden ml-auto">
        <MenuDropdown>
          <MenuIcon className="h-8 w-8"></MenuIcon>
        </MenuDropdown>
      </div>
    </Navbar>
  );
};

export default AppBar;

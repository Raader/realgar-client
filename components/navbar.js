import Link from "next/link";
import Brand from "./brand";
import NavLink from "./nav_link";
import {
  HomeIcon,
  InformationCircleIcon,
  ViewBoardsIcon,
} from "@heroicons/react/solid";
import NavbarStart from "./navbar_start";
import NavbarEnd from "./navbar_end";

const Navbar = () => {
  return (
    <nav className="flex flex-row flex-nowrap items-center py-4 px-4 md:px-10 border-b bo">
      <Brand>REALGAR</Brand>
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
        <div className="bg-gray-400 bg-opacity-10">
          <NavLink>Sign Up</NavLink>
        </div>
      </NavbarEnd>
    </nav>
  );
};

export default Navbar;

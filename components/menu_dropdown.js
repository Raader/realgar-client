import {
  HomeIcon,
  InformationCircleIcon,
  MenuIcon,
  ViewBoardsIcon,
} from "@heroicons/react/solid";
import Dropdown from "./common/dropdown";
import NavLink from "./nav_link";

const MenuDropdown = ({ user }) => {
  return (
    <Dropdown
      className="right-auto left-0"
      label={
        <div className="transition duration-200 hover:bg-opacity-10 hover:bg-gray-500 hover:text-black text-gray-600 py-2 px-4 rounded-md">
          <MenuIcon className="h-6 w-6"></MenuIcon>
        </div>
      }
    >
      <NavLink icon={<HomeIcon className="h-5 w-5"></HomeIcon>} href="/">
        Home
      </NavLink>
      <NavLink
        icon={
          <InformationCircleIcon className="h-5 w-5"></InformationCircleIcon>
        }
        href="/about"
      >
        About
      </NavLink>
      <NavLink
        icon={<ViewBoardsIcon className="h-5 w-5"></ViewBoardsIcon>}
        href="/dashboard"
      >
        Dashboard
      </NavLink>
      {!user ? (
        <>
          <div>
            <NavLink href="/login">Login</NavLink>
          </div>
          <div>
            <NavLink href="/register">Sign Up</NavLink>
          </div>
        </>
      ) : (
        <></>
      )}
    </Dropdown>
  );
};

export default MenuDropdown;

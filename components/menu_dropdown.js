import {
  HomeIcon,
  InformationCircleIcon,
  MenuIcon,
  ViewBoardsIcon,
} from "@heroicons/react/solid";
import Dropdown from "./dropdown";
import NavLink from "./nav_link";

const MenuDropdown = ({}) => {
  return (
    <Dropdown
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
    </Dropdown>
  );
};

export default MenuDropdown;

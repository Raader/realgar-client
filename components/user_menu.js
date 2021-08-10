import { ChevronDownIcon } from "@heroicons/react/outline";
import Avatar from "./avatar";
import Dropdown from "./dropdown";
import NavLink from "./nav_link";
import Button from "./button";
import { LogoutIcon } from "@heroicons/react/solid";

const UserMenu = ({ user }) => {
  return (
    <Dropdown
      content={
        <div>
          <div className="flex flex-row items-center space-x-1 hover:bg-gray-50 p-2 cursor-pointer">
            <LogoutIcon className="h-5 w-5"></LogoutIcon>
            <div>Logout</div>
          </div>
        </div>
      }
    >
      <NavLink icon={<Avatar></Avatar>} className="hover:text-gray-800 p-0">
        <div className="flex items-center space-x-1">
          <div>{user?.username}</div>{" "}
          <ChevronDownIcon className="h-5 w-5"></ChevronDownIcon>
        </div>
      </NavLink>
    </Dropdown>
  );
};

export default UserMenu;

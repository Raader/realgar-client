import { ChevronDownIcon } from "@heroicons/react/outline";
import Avatar from "./avatar";
import NavLink from "./nav_link";

const UserMenu = ({ user }) => {
  return (
    <NavLink icon={<Avatar></Avatar>} className="hover:text-gray-800 text-xl">
      <div className="flex items-center space-x-1">
        <div>{user?.username}</div>{" "}
        <ChevronDownIcon className="h-5 w-5"></ChevronDownIcon>
      </div>
    </NavLink>
  );
};

export default UserMenu;

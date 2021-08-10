import { ChevronDownIcon } from "@heroicons/react/outline";
import Avatar from "./avatar";
import Dropdown from "./dropdown";
import NavLink from "./nav_link";
import Button from "./button";
import { LogoutIcon } from "@heroicons/react/solid";
import ClearButton from "./clear_button";
import IconText from "./icon_text";

const UserMenu = ({ user }) => {
  return (
    <Dropdown
      label={
        <NavLink icon={<Avatar></Avatar>} className="hover:text-gray-800 p-0">
          <div className="flex items-center space-x-1">
            <div>{user?.username}</div>{" "}
            <ChevronDownIcon className="h-5 w-5"></ChevronDownIcon>
          </div>
        </NavLink>
      }
    >
      <ClearButton>
        <IconText icon={<LogoutIcon className="h-5 w-5"></LogoutIcon>}>
          Logout
        </IconText>
      </ClearButton>
    </Dropdown>
  );
};

export default UserMenu;

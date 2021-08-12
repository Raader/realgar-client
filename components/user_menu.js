import { ChevronDownIcon } from "@heroicons/react/outline";
import Avatar from "./avatar";
import Dropdown from "./dropdown";
import NavLink from "./nav_link";
import Button from "./button";
import { LogoutIcon } from "@heroicons/react/solid";
import ClearButton from "./clear_button";
import IconText from "./icon_text";
import { useRouter } from "next/dist/client/router";
import { remove } from "../lib/api";

const UserMenu = ({ user }) => {
  const router = useRouter();
  return (
    <Dropdown
      label={
        <NavLink
          icon={<Avatar className="-mr-1 lg:mr-0"></Avatar>}
          className="hover:text-gray-800 p-0 bg-transparent"
        >
          <div className="flex items-center lg:space-x-1">
            <div className="hidden lg:block">{user?.username}</div>
            <ChevronDownIcon className="h-5 w-5 hidden lg:block"></ChevronDownIcon>
          </div>
        </NavLink>
      }
    >
      <ClearButton
        onClick={() => {
          remove("/session").then(() => router.push("/"));
        }}
      >
        <IconText icon={<LogoutIcon className="h-5 w-5"></LogoutIcon>}>
          Logout
        </IconText>
      </ClearButton>
    </Dropdown>
  );
};

export default UserMenu;

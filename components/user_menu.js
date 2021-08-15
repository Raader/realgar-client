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
        <div className="hover:bg-opacity-10 hover:bg-gray-400 hover:text-gray-800 text-gray-600 py-2 px-4 font-bold flex flex-row items-center transition duration-200 rounded-md cursor-pointer">
          <IconText icon={<Avatar className="-mr-1 sm:mr-0"></Avatar>}>
            <div className="flex items-center lg:space-x-1">
              <div className="hidden sm:block">{user?.username}</div>
              <ChevronDownIcon className="h-5 w-5 hidden sm:block"></ChevronDownIcon>
            </div>
          </IconText>
        </div>
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

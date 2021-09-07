import { ChevronDownIcon, CogIcon } from "@heroicons/react/outline";
import Avatar from "./common/avatar";
import Dropdown from "./common/dropdown";
import Button from "./common/button";
import { LogoutIcon } from "@heroicons/react/solid";
import IconText from "./common/icon_text";
import { useRouter } from "next/dist/client/router";
import { remove } from "../lib/api";
import { useContext } from "react";
import UserContext from "./user_context";

const UserMenu = () => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);

  const logoutUser = () => {
    remove("/session").then(() => {
      setUser(undefined);
      localStorage.setItem("loggedIn", "false");
      router.push("/");
    });
  };
  return (
    <Dropdown
      className="mt-4 lg:mt-0"
      label={
        <div className="hover:bg-opacity-10 hover:bg-gray-400 hover:text-gray-800 text-gray-600 p-1 lg:py-2 lg:px-4 font-bold flex flex-row items-center transition duration-200 cursor-pointer rounded-full lg:rounded-md no-highlight">
          <IconText
            icon={
              <Avatar className="-mr-1 sm:mr-0 w-8 h-8 lg:w-6 lg:h-6"></Avatar>
            }
          >
            <div className="flex items-center lg:space-x-1">
              <div className="hidden sm:block">{user?.username}</div>
              <ChevronDownIcon className="h-5 w-5 hidden sm:block"></ChevronDownIcon>
            </div>
          </IconText>
        </div>
      }
    >
      <div className="flex flex-col w-80 divide-y space-y-2">
        <div className="flex flex-col items-center justify-start p-4">
          <Avatar className="w-20 h-20 lg:h-20 lg:w-20"></Avatar>
          <div className="text-2xl text-gray-700 font-bold mt-2">
            {user?.username}
          </div>
          <div className="text-gray-500">{user?.email}</div>
        </div>
        <div className="p-4 flex justif-center">
          <Button
            className="border block bg-transparent hover:bg-gray-100 text-gray-500 hover:text-gray-700"
            onClick={logoutUser}
          >
            <IconText icon={<LogoutIcon className="h-5 w-5"></LogoutIcon>}>
              Logout
            </IconText>
          </Button>
          <Button
            className="border block bg-transparent hover:bg-gray-100 text-gray-500 hover:text-gray-700 ml-4"
            onClick={() => router.push("/user/settings")}
          >
            <IconText icon={<CogIcon className="h-5 w-5"></CogIcon>}>
              Settings
            </IconText>
          </Button>
        </div>
      </div>
    </Dropdown>
  );
};

export default UserMenu;

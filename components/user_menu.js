import Avatar from "./avatar";

const UserMenu = ({ user }) => {
  return (
    <div className="flex flex-row items-center space-x-2 hover:bg-gray-400 hover:bg-opacity-10 p-2 rounded-md transition duration-200 cursor-pointer">
      <Avatar></Avatar>
      <div className="font-semibold text-xl">{user?.username}</div>
    </div>
  );
};

export default UserMenu;

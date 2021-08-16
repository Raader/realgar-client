import { MenuIcon } from "@heroicons/react/solid";

const MenuButton = ({ children, ...props }) => {
  return (
    <div
      className="transition duration-200 hover:bg-opacity-10 hover:bg-gray-500 hover:text-black text-gray-600 p-2 rounded-md box-border"
      {...props}
    >
      <MenuIcon className="h-8 w-8"></MenuIcon>
    </div>
  );
};

export default MenuButton;

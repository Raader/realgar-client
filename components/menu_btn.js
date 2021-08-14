import { MenuIcon } from "@heroicons/react/solid";

const MenuButton = ({ children, ...props }) => {
  return (
    <div
      className="transition duration-200 hover:bg-opacity-10 hover:bg-gray-500 hover:text-black text-gray-600 py-2 px-4 rounded-md"
      {...props}
    >
      <MenuIcon className="h-6 w-6"></MenuIcon>
    </div>
  );
};

export default MenuButton;

const MenuDropdown = ({ children }) => {
  return (
    <div className="transition duration-200 hover:bg-opacity-10 hover:bg-gray-500 hover:text-black text-gray-600 py-2 px-4 rounded-md">
      {children}
    </div>
  );
};

export default MenuDropdown;

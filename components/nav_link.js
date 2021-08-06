import Link from "next/link";

const NavLink = ({ children, href, icon }) => {
  return (
    <Link href={href || "#"}>
      <a className="hover:bg-opacity-10 hover:bg-gray-500 hover:text-black text-gray-600 py-2 px-4 font-bold flex flex-row items-center transition duration-200 rounded-md">
        {icon}
        <div className="ml-1">{children}</div>
      </a>
    </Link>
  );
};

export default NavLink;

import Link from "next/link";

const NavLink = ({ children, href, icon, className }) => {
  return (
    <Link href={href || "#"}>
      <a
        className={
          "hover:bg-opacity-10 hover:bg-gray-400 hover:text-green-500 text-gray-600 py-2 px-4 font-bold flex flex-row items-center transition duration-200 rounded-md" +
          " " +
          className
        }
      >
        {icon}
        <div className="ml-1">{children}</div>
      </a>
    </Link>
  );
};

export default NavLink;

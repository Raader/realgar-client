import Brand from "./brand";
import Navbar from "./navbar";
import NavbarEnd from "./navbar_end";
import NavbarStart from "./navbar_start";
import NavLink from "./nav_link";
import {
  HomeIcon,
  InformationCircleIcon,
  MenuIcon,
  ViewBoardsIcon,
} from "@heroicons/react/solid";
import MenuDropdown from "./menu_dropdown";
import UserMenu from "./user_menu";
import { useEffect, useState } from "react";
import MenuButton from "./menu_btn";
import NavbarDrop from "./navbar_drop";
import { useRouter } from "next/dist/client/router";

const NavLinks = () => {
  const router = useRouter();
  const [links, setLinks] = useState([
    {
      icon: <HomeIcon className="h-5 w-5"></HomeIcon>,
      href: "/",
      name: "Home",
      selected: true,
    },
    {
      icon: <InformationCircleIcon className="h-5 w-5"></InformationCircleIcon>,
      href: "/about",
      name: "About",
      selected: false,
    },
    {
      icon: <ViewBoardsIcon className="h-5 w-5"></ViewBoardsIcon>,
      href: "/dashboard",
      name: "Dashboard",
      selected: false,
    },
  ]);

  useEffect(() => {
    setLinks((prev) =>
      prev.map((link) =>
        link.href === router.asPath
          ? { ...link, selected: true }
          : { ...link, selected: false }
      )
    );
  }, [router.asPath]);
  return (
    <>
      {links.map((link) =>
        !link.selected ? (
          <NavLink icon={link.icon} href={link.href} key={link.name}>
            {link.name}
          </NavLink>
        ) : (
          <NavLink
            icon={link.icon}
            href={link.href}
            key={link.name}
            className="bg-gray-400 text-green-500 bg-opacity-10"
          >
            {link.name}
          </NavLink>
        )
      )}
    </>
  );
};

const AppBar = ({ user }) => {
  const [drop, setDrop] = useState(false);
  return (
    <>
      <Navbar>
        <div className="lg:hidden mr-auto cursor-pointer">
          <MenuButton onClick={() => setDrop((prev) => !prev)}></MenuButton>
        </div>

        <Brand></Brand>
        <NavbarStart>
          <NavLinks></NavLinks>
        </NavbarStart>
        <NavbarEnd>
          {user ? (
            <UserMenu user={user}></UserMenu>
          ) : (
            <>
              <div>
                <NavLink href="/login">Login</NavLink>
              </div>
              <div className="bg-gray-400 bg-opacity-10 rounded-md whitespace-nowrap">
                <NavLink href="/register">Sign Up</NavLink>
              </div>
            </>
          )}
        </NavbarEnd>

        <div className="ml-auto lg:hidden">
          {user ? <UserMenu user={user}></UserMenu> : <></>}
        </div>
      </Navbar>
      <NavbarDrop open={drop}>
        <NavLinks></NavLinks>
      </NavbarDrop>
    </>
  );
};

export default AppBar;

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
import { useContext, useEffect, useState } from "react";
import MenuButton from "./menu_btn";
import NavbarDrop from "./navbar_drop";
import { useRouter } from "next/dist/client/router";
import UserContext from "./user_context";

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
            className="text-green-500 bg-opacity-10"
          >
            {link.name}
          </NavLink>
        )
      )}
    </>
  );
};

const AppBar = ({}) => {
  const [drop, setDrop] = useState(false);
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="sticky top-0 z-30">
      <Navbar>
        <div className="lg:hidden cursor-pointer">
          <MenuButton onClick={() => setDrop((prev) => !prev)}></MenuButton>
        </div>

        <Brand></Brand>
        <NavbarStart>
          <NavLinks></NavLinks>
        </NavbarStart>
        <NavbarEnd>
          {user ? (
            <UserMenu></UserMenu>
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
          {user ? <UserMenu></UserMenu> : <></>}
        </div>
      </Navbar>
      <NavbarDrop open={drop} extended={user ? 0 : 2}>
        <NavLinks></NavLinks>
        {!user ? (
          <>
            <div>
              <NavLink href="/login">Login</NavLink>
            </div>
            <div>
              <NavLink href="/register">Sign Up</NavLink>
            </div>
          </>
        ) : (
          <></>
        )}
      </NavbarDrop>
    </div>
  );
};

export default AppBar;

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

import { Link, NavLink } from "react-router";

import close from "../../assets/icons/close.svg";
import menu from "../../assets/icons/menu.svg";
import petRescueLogo from "../../assets/petRescueLogo.png";
import userDefault from "../../assets/userPhotoDefault.png";
import Avatar from "../../ui/Avatar";
import Button from "../../ui/Button";
import { isAuthenticated } from "../../utils/auth";
import { useLogout } from "../../hooks/login.hook";
import { useAtom } from "jotai";
import { userWithTokenAtom } from "../../context";

const navigation = [
  { name: "Inicio", href: "/", current: false },
  { name: "Reporta tu mascota", href: "/create-pet-report", current: false },
  { name: "Mascotas perdidas", href: "/lost-pets", current: false },
  { name: "Mapa", href: "/lost-pets-map", current: false },
];

const navigationMobile = [
  { name: "Inicio", href: "/", current: false },
  { name: "Reporta tu mascota", href: "/create-pet-report", current: false },
  { name: "Mascotas perdidas", href: "/lost-pets", current: false },
  { name: "Mapa", href: "/lost-pets-map", current: false },
  { name: "Iniciar sesión", href: "/login", current: false },
  { name: "Regitrarse", href: "/register", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [user, _setUser] = useAtom(userWithTokenAtom);
  const { logout } = useLogout();

  return (
    <Disclosure as="nav" className="bg-white w-full relative">
      <div className="z-50 fixed top-0 right-0 left-0 bg-white shadow-lg">
        <div className="container px-5 mx-auto relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center pl-5 sm:pl-0 sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center cursor-pointer rounded-md focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <img
                className="block size-6 group-data-open:hidden"
                src={menu}
                alt="Open Menu icon"
              />
              <img
                className="hidden size-6 group-data-open:block"
                src={close}
                alt="Close Menu icon"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link to="/">
                <img
                  alt="Pet Rescue App by Frezzini Lucas"
                  src={petRescueLogo}
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={({ isActive }: { isActive: boolean }) =>
                      isActive
                        ? "text-primary rounded-md px-3 py-2"
                        : "rounded-md px-3 py-2 text-dark transition-colors hover:bg-primary hover:text-white"
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {!isAuthenticated() ? (
              <div className="hidden lg:flex lg:flex-1 lg:justify-end lg: gap-4">
                <Link to={"/login"}>
                  <Button type="button" isSmall isUnfilled>
                    Iniciar sesión
                  </Button>
                </Link>
                <Link to={"/register"}>
                  <Button type="button" isSmall>
                    Registrarse
                  </Button>
                </Link>
              </div>
            ) : (
              <Menu as="div" className="relative ml-3">
                <div className="pr-3 sm:pr-0">
                  <MenuButton className="relative flex rounded-full text-sm cursor-pointer focus:outline-hidden">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <Avatar
                      src={user?.profilePic ? user?.profilePic : userDefault}
                      size="32px"
                      isCircle
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 mr-3 sm:mr-0 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <MenuItem>
                    <Link
                      to="/pets-state"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Mis mascotas
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/pets-reports"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Mis avistajes
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/edit-profile"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Configuracion
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <button
                      onClick={() => {
                        logout();
                      }}
                      className="block w-full px-4 py-2 cursor-pointer text-left text-sm border-t-1 border-gray-300 text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                    >
                      Cerrar sesion
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            )}
          </div>
        </div>
      </div>

      <DisclosurePanel className="fixed z-40 top-[64px] bg-white w-full left-0 shadow-lg sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigationMobile.map((item) => (
            <Link to={item.href} key={item.name}>
              <DisclosureButton
                key={item.name}
                as="button"
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "text-primary"
                    : "text-dark transition-colors hover:bg-primary hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

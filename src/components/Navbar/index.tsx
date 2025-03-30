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
import Avatar from "../../ui/Avatar";

const navigation = [
  { name: "Inicio", href: "/", current: false },
  { name: "Reporta tu mascota", href: "/create-pet-report", current: false },
  { name: "Mascotas perdidas", href: "/lost-pets", current: false },
  { name: "Mapa", href: "lost-pets-map", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
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
                        ? "text-primary rounded-md px-3 py-2 text-sm font-medium"
                        : "rounded-md px-3 py-2 text-sm font-medium text-dark transition-colors hover:bg-primary hover:text-white"
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div className="pr-3 sm:pr-0">
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <Avatar
                    src="https://avatars.githubusercontent.com/u/7221389?v=4"
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
                    to="/edit-profile"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Configuracion
                  </Link>
                </MenuItem>
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
                    to="/logout"
                    className="block px-4 py-2 text-sm border-t-1 border-gray-300 text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Cerrar sesion
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="fixed top-[64px] bg-white w-full left-0 shadow-lg sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
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
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { Cog } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";
const routeMap: Record<string, string> = {
  user: "/dashboard",
  admin: "/dashboard/admin",
  driver: "/dashboard/driver",
};

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Browse Cars", href: "/cars" },
    { label: "Offers", href: "/offers" },
    { label: "Contact Us", href: "/contact" },
    { label: "Blogs", href: "/blogs" },
    { label: "About Us", href: "/about" },
    { label: "Dashboard", href: routeMap.user }, 
    { label: "Log Out", href: "/logout" },
    { label: "Login", href: "/login" },
  ];
  return (
    <Navbar className="w-full" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Cog className="text-blue-500" />
          <p className="font-bold ml-1 text-inherit text-red-500">RideMate</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/cars">
            Browes Cars
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/offers">
            Offers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact">
            Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about">
            About us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/blogs">
            Blogs
          </Link>
        </NavbarItem>

        <NavbarItem>
          {/* {user && <Link href={routeMap[user?.role]}>Dashboard</Link>} */}
          <Link href={routeMap.user}>Dashboard</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>

        {/* {user ? (
          <NavbarItem>
            <Button onClick={logOutUser} color="primary" variant="flat">
              Logout
            </Button>
          </NavbarItem>
        ) : (
          <NavbarItem className="hidden lg:flex">
            <Link href="/login">Login</Link>
          </NavbarItem>
        )} */}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              className="w-full"
              color={
                item.label === "Dashboard"
                  ? "primary"
                  : item.label === "Log Out"
                  ? "danger"
                  : "foreground"
              }
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

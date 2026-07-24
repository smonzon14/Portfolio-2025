"use client";

import Image from "next/image";
import NextLink from "next/link";
import React from "react";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Link } from "@heroui/link";

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Research", href: "/research" },
  { name: "Projects", href: "/projects" },
  { name: "Music", href: "/music" },
  { name: "Contact", href: "/contact" },
];

export const SmonzonNavbar = ({isMobileDevice}: {isMobileDevice: boolean}) => {
  const [atTop, setAtTop] = React.useState(true);
  React.useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Navbar
          isBlurred={!atTop}
          className={`sticky top-0 flex items-center justify-center w-full transition-colors duration-500 ${atTop ? "bg-transparent" : "bg-black/60"}`}
          maxWidth="full"
        >
          <NavbarBrand>
            <Link
              as={NextLink}
              href="/"
              className="flex flex-row items-center"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className={`w-10 h-10 ${isMobileDevice ? "-ml-5" : "-ml-2"}`}
                loading="eager"
              />
              <h1 className="text-xl text-white font-bold">SMONZON.COM</h1>
            </Link>
          </NavbarBrand>
          {isMobileDevice ? (
            <div className="ml-auto">
              {/* Hamburger menu for mobile */}
              <details className="relative">
                <summary className="list-none cursor-pointer flex items-center px-3 py-2 rounded hover:bg-white/10">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </summary>
                <div className="absolute right-0 mt-2 w-48 bg-black/90 rounded shadow-lg z-50 flex flex-col border border-white/10">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      as={NextLink}
                      color="foreground"
                      href={item.href}
                      className="block px-4 py-3 text-white hover:bg-white/10 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                  {/* <Link
                    as="a"
                    title="Curdle"
                    color="warning"
                    href="/curdle/index.html"
                    target="_blank"
                    className="block px-4 py-3 text-yellow-400 hover:bg-white/10 transition-colors duration-200"
                  >
                    <span className="cheesy">Curdle</span>
                  </Link> */}
                </div>
              </details>
              <style>{`
                summary {
                  outline: none;
                }

                details[open] > div {
                  animation: slideDown 0.3s ease-out;
                }

                details:not([open]) > div {
                  animation: slideUp 0.3s ease-in;
                }

                @keyframes slideDown {
                  from {
                    opacity: 0;
                    transform: translateY(-10px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }

                @keyframes slideUp {
                  from {
                    opacity: 1;
                    transform: translateY(0);
                  }
                  to {
                    opacity: 0;
                    transform: translateY(-10px);
                  }
                }
              `}</style>
            </div>
          ) : (
            <NavbarContent className="hidden sm:flex gap-4" justify="end">
              {navItems.map((item) => (
              <NavbarItem key={item.name} isActive={false}>
                <Link
                as={NextLink}
                color="foreground"
                href={item.href}
                className="hover:text-white/60 transition-colors duration-200"
                >
                {item.name}
                </Link>
              </NavbarItem>
              ))}
              <NavbarItem>
              {/* <Button
                as={Link}
                title="Curdle"
                color="warning"
                variant="ghost"
                size="sm"
                href="/curdle/index.html"
                target="_blank"
              >
                {"Solve today's "}
                <span className="cheesy">Curdle</span>
              </Button> */}
              </NavbarItem>
            </NavbarContent>
          )}
        </Navbar>
  )
}
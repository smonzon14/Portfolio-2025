"use client";

import Image from "next/image";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export const SmonzonNavbar = ({isMobileDevice}: {isMobileDevice: boolean}) => {
  return (
    <Navbar
          className="sticky top-0 flex items-center justify-center w-full bg-[black] bg-black/60"
          maxWidth="full"
        >
          <NavbarBrand>
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className={`w-10 h-10 ${isMobileDevice ? "-ml-5" : "-ml-2"}`}
              loading="eager"
            />
            <h1 className="text-xl text-white font-bold">SMONZON.COM</h1>
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
                <div className="absolute right-0 mt-2 w-48 bg-black/90 rounded shadow-lg z-50 flex flex-col">
                  {[
                    "about",
                    "research",
                    "software",
                    "engineering",
                    "music",
                    "contact",
                  ].map((section) => (
                    <Link
                      key={section}
                      color="foreground"
                      href={`#${section}`}
                      onClick={(e) => {
                          e.preventDefault();
                          const el = document.getElementById(section);
                          if (el) {
                          const yOffset = -100;
                          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                          window.scrollTo({ top: y, behavior: "smooth" });
                          }
                      }}
                      className="block px-4 py-3 text-white hover:bg-white/10 transition-colors duration-200"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Link>
                  ))}
                  <Link
                    as="a"
                    title="Curdle"
                    color="warning"
                    href="/curdle/index.html"
                    target="_blank"
                    className="block px-4 py-3 text-yellow-400 hover:bg-white/10 transition-colors duration-200"
                  >
                    <span className="cheesy">Curdle</span>
                  </Link>
                </div>
              </details>
            </div>
          ) : (
            <NavbarContent className="hidden sm:flex gap-4" justify="end">
              {[
              "about",
              "research",
              "software",
              "engineering",
              "music",
              "contact",
              ].map((section) => (
              <NavbarItem key={section} isActive={false}>
                <Link
                color="foreground"
                href={`#${section}`}
                className="hover:text-white/60 transition-colors duration-200"
                onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(section);
                    if (el) {
                    const yOffset = -100;
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                    }
                }}
                >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </NavbarItem>
              ))}
              <NavbarItem>
              <Button
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
              </Button>
              </NavbarItem>
            </NavbarContent>
          )}
        </Navbar>
  )
}
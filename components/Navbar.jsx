"use client";
import { useTheme } from "next-themes";
import { Moon, Sun, Laptop,MenuIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  const { setTheme } = useTheme();

  return (
    <nav className="navbar border-b border-slate-300 dark:border-slate-700 shadow-sm transition-all ease-in navbar-expand-lg dark:bg-slate-800">
      <div className="container-fluid">
        <Link
          className="navbar-brand dark:text-slate-200 hover:!text-slate-300"
          href="/"
        >
          <Image
            src="/assets/logo.svg"
            className="object-contain"
            alt="logo"
            width={50}
            height={50}
            priority
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <MenuIcon className="inline dark:text-slate-100"/>
        </button>
        <div
          className="offcanvas offcanvas-end dark:bg-slate-800"
          // tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item dropdown z-10" dir="ltr">
                <button
                  className="nav-link !inline sm:block"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Moon className="rotate-90 hidden transition-all hover:text-slate-900 dark:rotate-0 dark:block dark:saturate-100 dark:text-slate-400 dark:hover:text-slate-100" />
                  <Sun className="rotate-0 block transition-all hover:text-slate-900 dark:rotate-90 dark:hidden dark:text-slate-400 dark:hover:text-slate-100" />
                  <span className="sr-only">Toggle theme</span>
                </button>

                <ul className="dropdown-menu dark:bg-slate-900">
                  <li
                    className=" dark:bg-slate-900 dropdown-item cursor-pointer dark:hover:bg-slate-800 dark:text-slate-400 dark:hover:text-slate-100 active:!bg-gray-400"
                    onClick={() => setTheme("dark")}
                  >
                    <Moon className="mr-2 h-4 w-4" />
                    <span>Dark</span>
                  </li>
                  <li
                    className=" dark:bg-slate-900 dropdown-item cursor-pointer dark:hover:bg-slate-800 dark:text-slate-400 dark:hover:text-slate-100 active:!bg-gray-400"
                    onClick={() => setTheme("light")}
                  >
                    <Sun className="mr-2 h-4 w-4" />
                    <span>Light</span>
                  </li>
                  <li
                    className=" dark:bg-slate-900 dropdown-item cursor-pointer dark:hover:bg-slate-800 dark:text-slate-400 dark:hover:text-slate-100 active:!bg-gray-400"
                    onClick={() => setTheme("system")}
                  >
                    <Laptop className="mr-2 h-4 w-4" />
                    <span>System</span>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link dark:!text-slate-200 dark:hover:!text-slate-300"
                  href="/"
                >
                  الرئيسية
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link dark:text-slate-200 dark:hover:!text-slate-300"
                  href="/services"
                >
                  خدماتنا
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link dark:text-slate-200 dark:hover:!text-slate-300"
                  href="/tours"
                >
                  الجولات السياحية
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link dark:text-slate-200 dark:hover:!text-slate-300"
                  href="/contact"
                >
                  تواصل معنا
                </Link>
              </li>
              <li className="nav-item">
                <Button>
                  <Link
                    href="/signup"
                    className="text-white dark:!text-slate-900"
                  >
                    تسجيل الدخول
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

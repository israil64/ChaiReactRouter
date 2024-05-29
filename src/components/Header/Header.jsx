import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../ThemToggle/ThemeToggle";

export default function Header() {
  return (
    <>
      <header>
        <nav class="bg-green-100 px-4 lg:px-6 py-3.5 dark:bg-gray-800 shadow-lg rounded-sm dark:text-white shadow-indigo-500/50 ">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <NavLink to="/" className="font-sans font-bold text-lg ">
              Galaxy Mobile
            </NavLink>

            <div class="flex items-center lg:order-2 space-x-2">
              <button
                type="button"
                class="text-blue-500 dark:text-white-400 hover:text-blue-500 dark:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 w-10 h-10 inline-flex items-center justify-center"
              >
                <ThemeToggle />
              </button>
              <a
                href="#"
                class="text-white bg-purple-800 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                Get started
              </a>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  class="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li class="hover:bg-red-300 ">
                  <NavLink
                    to=""
                    style={({ isActive, isPending }) => {
                      return {
                        color: isActive ? "red" : "inherit",
                      };
                    }}
                    className={({ isActive, isPending }) => {
                      return isActive ? "active" : isPending ? "pending" : "";
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="about"
                    style={({ isActive, isPending }) => {
                      return {
                        color: isActive ? "red" : "inherit",
                      };
                    }}
                    className={({ isActive, isPending }) => {
                      return isActive ? "active" : isPending ? "pending" : "";
                    }}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="contact"
                    style={({ isActive, isPending }) => {
                      return {
                        color: isActive ? "red" : "inherit",
                      };
                    }}
                    className={({ isActive, isPending }) => {
                      return isActive ? "active" : isPending ? "pending" : "";
                    }}
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="github"
                    style={({ isActive, isPending }) => {
                      return {
                        color: isActive ? "red" : "inherit",
                      };
                    }}
                    className={({ isActive, isPending }) => {
                      return isActive ? "active" : isPending ? "pending" : "";
                    }}
                  >
                    Github
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

'use client'
import React from 'react'

interface HeaderComponentProps {
  setActiveComponent: (component: string) => void
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ setActiveComponent }): JSX.Element => {
  return (
    <header
      className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-white"
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="max-w-full px-4">
            <a href="/" className="navbar-logo block w-full py-5">
              <img
                src="/images/logo/logo.svg"
                alt="logo"
                className="header-logo w-full"
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4 relative z-40">
            <div className="mx-auto">
              <button
                id="navbarToggler"
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className="relative my-[6px] block h-[2px] w-[30px] bg-primary"
                ></span>
                <span
                  className="relative my-[6px] block h-[2px] w-[30px] bg-primary"
                ></span>
                <span
                  className="relative my-[6px] block h-[2px] w-[30px] bg-primary"
                ></span>
              </button>
              <nav
                id="navbarCollapse"
                className="absolute right-4 z-40 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6"
              >
                <ul className="blcok lg:flex ">
                  <li className="group relative">
                    <button
                      onClick={() => { setActiveComponent('home') }}
                      className="ud-menu-scroll mx-8 flex py-2 text-base font-semibold text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                    >
                      HOME
                    </button>
                  </li>
                  <li className="group relative">
                    <button
                      onClick={() => { setActiveComponent('feature') }}
                      className="ud-menu-scroll mx-8 flex py-2 text-base font-normal text-black dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 xl:ml-10"
                    >
                      FEATURES
                    </button>
                  </li>
                  <li className="group relative">
                    <button
                      onClick={() => { setActiveComponent('schedule') }}
                      className="ud-menu-scroll mx-8 flex py-2 text-base font-normal text-black dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 xl:ml-10"
                    >
                      SCHEDULE
                    </button>
                  </li>
                  <li className="group relative">
                    <button
                      onClick={() => { setActiveComponent('about') }}
                      className="ud-menu-scroll mx-8 flex py-2 text-base font-normal text-black dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 xl:ml-10"
                    >
                      ABOUT US
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center justify-end pr-16 lg:pr-0">
              <div className="hidden sm:flex">
                <a href="#" className="flex items-center mr-5"><img src="/images/logo/search.png" /></a>
                <a href="#" className="flex items-center mr-5"><img src="/images/logo/user.png" /></a>
                <a
                  href="signup.html"
                  className="rounded-full bg-primary px-10 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent

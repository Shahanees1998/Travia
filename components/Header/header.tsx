'use client'
import React, { useEffect, useRef, useState } from 'react'

interface HeaderComponentProps {
  setActiveComponent: (component: string) => void
  activeComponent: string
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ setActiveComponent, activeComponent }): JSX.Element => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const trigger = useRef<HTMLAnchorElement>(null)
  const dropdown = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setDropdownOpen(false)
  }, [activeComponent])

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent): void => {
      if (dropdown?.current == null || trigger?.current == null) return
      if (
        !dropdownOpen ||
        dropdown.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      ) { return }
      setDropdownOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => { document.removeEventListener('click', clickHandler) }
  })
  return (
    <header
      className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-white"
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="max-w-full px-4">
            <a href="/home" className="navbar-logo block w-full py-5">
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
                <ul className="blcok gap-8 lg:flex ">
                  <li className="group relative">
                    <button
                      onClick={() => { setActiveComponent('home') }}
                      className={`ud-menu-scroll flex py-2 text-base  ${activeComponent === 'home' ? 'text-primary font-semibold' : 'text-black'} dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6`}
                    >
                      HOME
                    </button>
                  </li>
                  <li className="group relative">
                    <button
                      ref={trigger as any}
                      onClick={() => { setDropdownOpen(!dropdownOpen) }}
                      className={`ud-menu-scroll flex py-2 flex items-center text-base ${(activeComponent === 'simulator' || activeComponent === 'coupan' || activeComponent === 'comparison') ? 'text-primary font-semibold' : 'text-black'} dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6`}
                    >
                      FEATURES
                      <img className='ml-2 mb-1' src="/images/hero/down.svg" />
                    </button>

                    <div
                      ref={dropdown}
                      onFocus={() => { setDropdownOpen(true) }}
                      onBlur={() => { setDropdownOpen(false) }}
                      style={{ backgroundColor: '#E5E5E5', overflow: 'hidden', marginTop: '-0.8rem', width: 'max-content' }}
                      className={`absolute right-1/6 -mt-4 flex flex-col rounded-lg border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark ${dropdownOpen ? 'block' : 'hidden'

                        }`}
                    >
                      <ul className="flex flex-col" >
                        <li onClick={() => { setActiveComponent('simulator'); setDropdownOpen(false) }} className="hover:bg-primary hover:text-white cursor-pointer p-1 transition-colors duration-200">
                          <div style={{ padding: '0.5rem' }}>
                            RACE SIMULATOR
                          </div>
                        </li>
                        <li onClick={() => { setActiveComponent('coupan'); setDropdownOpen(false) }} className="hover:bg-primary hover:text-white cursor-pointer p-1 transition-colors duration-200" >
                          <div style={{ padding: '0.5rem' }}>
                            COUPAN GENERATOR
                          </div>
                        </li>
                        <li onClick={() => { setActiveComponent('comparison'); setDropdownOpen(false) }} className="hover:bg-primary hover:text-white cursor-pointer p-1  transition-colors duration-200">
                          <div style={{ padding: '0.5rem' }}>
                            HISTORICAL COMPARISON
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="group relative">
                    <button
                      onClick={() => { setActiveComponent('schedule') }}
                      className={`ud-menu-scroll flex py-2 text-base ${activeComponent === 'schedule' ? 'text-primary font-semibold' : 'text-black'} dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6`}
                    >
                      SCHEDULE
                    </button>
                  </li>
                  <li className="group relative">
                    <button
                      onClick={() => { setActiveComponent('about') }}
                      className={`ud-menu-scroll flex py-2 text-base ${activeComponent === 'about' ? 'text-primary font-semibold' : 'text-black'} dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6`}
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
                  href="/auth/login"
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

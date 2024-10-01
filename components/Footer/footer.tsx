'use client'
import React from 'react'

interface FooterComponentProps {
  setActiveComponent: (component: string) => void
}

const FooterComponent: React.FC<FooterComponentProps> = ({ setActiveComponent }): JSX.Element => {
  return (
    <footer
      className="wow fadeInUp relative pt-8 z-10 bg-primary "
      style={{ paddingTop: '1rem' }}
      data-wow-delay=".15s" >
      <div className="container">
        <div className="flex">
          <div className="w-full  px-4 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
            <div className="w-full">
              <a
                href="/home"
                className="inline-block max-w-[160px]"
              >
                <img
                  src="/images/logo/footer-logo.png"
                  alt="logotyp"
                  className="max-w-full"
                />
              </a>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
            <div className="mb-10 w-full flex justify-end">
              <ul>
                <li><h4 className="mb-3 text-lg font-semibold text-white">Kontakt</h4></li>
                <li>
                  <a href="mailto:info@travia.com" className="flex">
                    <img src="/images/footer/mail.png" alt="E-postikon" />
                    <span className="ml-2 text-white">info@travia.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mt-5 border-t border-[#ffffff] border-opacity-40 py-5"
      >
        <div className="container">
          <div className="-mx-4 flex items-center flex-wrap">
            <div className="w-full px-4 md:w-1/3 lg:w-1/3">
              <div className="my-1 flex flex-start">
                <p className="text-base text-white">
                  © 2024 Travia. Alla rättigheter förbehållna.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/3 lg:w-1/3">
              <div className="my-1 flex justify-center">
                <p className="text-base text-white font-normal text-center mr-5">
                  Villkor
                </p>
                <p className="text-base text-white font-normal mr-5 text-center">
                  Cookies
                </p>
                <p className="text-base text-white font-normal text-center cursor-pointer" onClick={() => { setActiveComponent('about') }}>
                  Prenumeration
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/3 lg:w-1/3">
              <div className="my-1 flex justify-end">
                <a href="#" aria-label="LinkedIn"><img className="ml-2" src="/images/footer/Linkedin.png" alt="LinkedIn-ikon" /></a>
                <a href="#" aria-label="Facebook"><img className="ml-2" src="/images/footer/Facebook (1).png" alt="Facebook-ikon" /></a>
                <a href="#" aria-label="Twitter"><img className="ml-2" src="/images/footer/Twitter (1).png" alt="Twitter-ikon" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent

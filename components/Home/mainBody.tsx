'use client'
import React from 'react'

const MainBody = (): JSX.Element => {
  return (
    <div
      id="home"
      className="relative overflow-hidden"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center relative z-10">
          <div className="w-full px-4">
            <div
              className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
            >
              <h1
                className="mb-6 text-4xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]"
              >
                En roligare travupplevelse
              </h1>
              <p
                className="mx-auto mb-9 max-w-[900px] text-base font-normal text-white sm:text-lg sm:leading-[1.44]"
              >
                Vi hjälper spelare att snabbt och tydligt hitta de hästar de vill satsa på, med hjälp av våra unika verktyg. Vår tjänst samlar all viktig information på ett ställe och presenterar den på ett sätt som är både snyggt och lätt att förstå.
              </p>
              <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                <li>
                  <a
                    href="/our-tools"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-[14px] text-center text-base font-semibold text-white shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-body-color"
                  >
                    Our Tools
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBody

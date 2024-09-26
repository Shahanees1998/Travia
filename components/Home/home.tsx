'use client'

import React, { useState } from 'react'
import Schedule from './schedule'
import Simulator from './simulator'
import Comparison from './comparison'
import Coupan from './coupan'
import About from './about'
import HeaderComponent from 'components/Header/header'
import MainBody from './mainBody'

const Home = (): JSX.Element => {
  const [activeComponent, setActiveComponent] = useState('home')

  const renderComponent = (): JSX.Element => {
    switch (activeComponent) {
      case 'schedule':
        return <Schedule />
      case 'simulator':
        return <Simulator />
      case 'comparison':
        return <Comparison />
      case 'coupan':
        return <Coupan />
      case 'about':
        return <About />
      default:
        return <MainBody />
    }
  }

  return (
    <>
    <HeaderComponent setActiveComponent={setActiveComponent}/>
    <div className="relative overflow-hidden pt-[120px] md:pt-[130px] lg:pt-[160px] landing-bg">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center relative z-10">
          <div className="w-full px-4">
            {renderComponent()}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home

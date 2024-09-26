import Home from 'components/Home/home'
import React from 'react'
const HomeComponent = async (): Promise<JSX.Element> => {
  return (
        <div className="bg-gray-2">
            <Home />
        </div>
  )
}

export default HomeComponent

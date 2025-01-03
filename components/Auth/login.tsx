'use client'
import Link from 'next/link'
import React from 'react'

const LoginComponent = (): JSX.Element => {
  return (
    <div className="container">
      <div className="wow fadeInUp" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s' }}>
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 py-5 lg:w-1/2">
            <img src="/images/hero/login.png" alt="Login hero" />
            <div className="absolute login-img-text">
              <h2 className="text-white dark:text-dark-6 text-left text-3xl font-semibold">
                Lorem Ipsum is simply
              </h2>
              <p className="text-white dark:text-dark-6 text-left text-md">
                Lorem Ipsum is simply
              </p>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 flex justify-center">
            <div className="mb-12 max-w-[540px] lg:mb-0">
              <img className="mx-auto" src="/images/hero/login-logo.png" alt="Login logo" style={{ height: '6rem' }} />
              <div className="px-2 py-2 bg-light rounded-full max-content mx-auto mt-8">
                <Link href={'/auth/login'} className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-2 text-center text-base font-medium text-white">
                  Logga in
                </Link>
                <Link href={'/auth/signup'} className="inline-flex items-center justify-center rounded-full bg-transparent px-10 py-2 text-center text-base font-medium text-black">
                  Registrera dig
                </Link>
              </div>
              <p className="text-base leading-relaxed text-body-color dark:text-dark-6 text-center text-sm mt-5 mb-5">
              </p>
              <div className="mb-[22px] relative">
                <label className="text-black text-sm font-medium">E-post</label>
                <input type="text" name="Email" placeholder="Ange din e-post" className="bg-white mt-1 w-full text-black dark:text-dark-6 placeholder:text-body-color border px-5 py-2 border-gray-7 dark:border-dark-3 rounded-full focus:border-primary focus:outline-none" />
              </div>
              <div className="mb-[22px] relative">
                <label className="text-black text-sm font-medium">Lösenord</label>
                <input type="password" name="Password" placeholder="***********" className="bg-white mt-1 w-full text-black dark:text-dark-6 placeholder:text-body-color border px-5 py-2 border-gray-7 dark:border-dark-3 rounded-full focus:border-primary focus:outline-none" />
                <img className="absolute right-0 mr-5 eye" src="/images/hero/eye.png" alt="Toggle password visibility" />
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 mr-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="link-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kom ihåg mig</label>
                </div>
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">Glömt lösenord ?</label>
              </div>

              <Link href={'/home'} className="inline-flex w-full items-center mt-8 justify-center rounded-full bg-primary px-7 py-2 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark">
                Logga in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent

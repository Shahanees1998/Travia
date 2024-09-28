'use client'
import Link from 'next/link'
import React from 'react'

const SignUpComponent = (): JSX.Element => {
  return (
        <div className="container overflow-hidden">
            <div className="wow fadeInUp" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s' }}>
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4 py-5 lg:w-1/2">
                        <img src="/images/hero/login.png" alt="Inloggningshjälte" />
                        <div className="absolute inset-0 flex flex-col justify-center px-6">
                            <h2 className="text-white text-3xl font-semibold mb-2">
                                Lorem Ipsum är helt enkelt
                            </h2>
                            <p className="text-white text-md">
                                Lorem Ipsum är helt enkelt
                            </p>
                        </div>

                    </div>
                    <div className="w-full px-4 lg:w-1/2 flex justify-center">
                        <div className="mb-12 max-w-[540px] lg:mb-0">
                            <img className="mx-auto" src="/images/hero/login-logo.png" alt="Inloggningslogotyp" style={{ height: '6rem' }}/>
                            <div className="px-2 py-2 bg-light rounded-full max-content mx-auto mt-8">
                                <Link href={'/auth/login'} className="inline-flex items-center justify-center rounded-full bg-transparent  px-10 py-2 text-center text-base font-medium text-black">
                                    Logga in
                                </Link>
                                <Link href={'/auth/signup'} className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-2 text-center text-base font-medium text-white">
                                    Registrera
                                </Link>
                            </div>
                            <p className="text-base leading-relaxed text-body-color dark:text-dark-6 text-center text-sm mt-5 mb-5">
                                Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin.
                            </p>
                            <div className="mb-2 relative">
                                <label className="text-black text-sm font-medium">Fullständigt namn</label>
                                <input type="text" name="Email" placeholder="Ange ditt fullständiga namn" className="bg-white mt-1 w-full text-black dark:text-dark-6 placeholder:text-body-color border px-5 py-2 border-gray-7 dark:border-dark-3 rounded-full focus:border-primary focus:outline-none" />
                            </div>
                            <div className="mb-2] relative">
                                <label className="text-black text-sm font-medium">E-post</label>
                                <input type="text" name="Email" placeholder="Ange din e-postadress" className="bg-white mt-1 w-full text-black dark:text-dark-6 placeholder:text-body-color border px-5 py-2 border-gray-7 dark:border-dark-3 rounded-full focus:border-primary focus:outline-none" />
                            </div>
                            <div className="mb-2 relative">
                                <label className="text-black text-sm font-medium">Lösenord</label>
                                <input type="text" name="Email" placeholder="***********" className="bg-white mt-1 w-full text-black dark:text-dark-6 placeholder:text-body-color border px-5 py-2 border-gray-7 dark:border-dark-3 rounded-full focus:border-primary focus:outline-none" />
                                <img className="absolute right-0 mr-5 eye" src="/images/hero/eye.png" />
                            </div>
                            <div className="mb-2 relative">
                                <label className="text-black text-sm font-medium">Bekräfta lösenord</label>
                                <input type="text" name="Email" placeholder="***********" className="bg-white mt-1 w-full text-black dark:text-dark-6 placeholder:text-body-color border px-5 py-2 border-gray-7 dark:border-dark-3 rounded-full focus:border-primary focus:outline-none" />
                                <img className="absolute right-0 mr-5 eye" src="/images/hero/eye.png" />
                            </div>

                            <Link href={'/home'} className="inline-flex w-full items-center mt-5 justify-center rounded-full bg-primary px-7 py-2 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark">
                                Registrera
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SignUpComponent

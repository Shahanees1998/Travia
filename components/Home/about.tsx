import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = (): JSX.Element => {
  return (
    <div
      id="home"
      className="relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <div className="bg-light px-8 py-8 rounded-lg mb-5">
              <h1 className="text-black text-2xl text-center font-semibold">Travia PLUS</h1>
              {['Senaste nytt - om dina favorithästar och kuskar',
                'Exklusiva intervjuer - med kuskar och stallpersonal',
                'Unika verktyg - Loppsimulatorn, kupongsgenerator mm.'].map((text, index) => (
                <p key={index} className="text-body-color text-center mb-5 flex justify-center items-center mt-5">
                  <Image src="/images/hero/tick.png" alt="Tick" width={20} height={20} className="mr-5" />
                  {text}
                </p>
              ))}
              <div className="w-full bg-light-orange px-10 py-10 rounded-xl text-4xl text-white text-center shadow-lg font-semibold mt-12">
                Travia PLUS. Allt exklusivt material 39kr/mån
              </div>
              <Link href="/signup" className="rounded-full sm-hold w-full mt-12 bg-primary px-10 py-5 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark inline-block text-center">
                Fortsätt
              </Link>
              <div className="flex flex-wrap justify-center items-center mt-5">
                {[...Array(6)].map((_, index) => (
                  <Image
                    key={index}
                    src={`/images/hero/Payment Icons${index === 0 ? '' : ` (${index})`}.png`}
                    alt={`Payment Icon ${index + 1}`}
                    width={50}
                    height={30}
                    className="mr-5 mt-5"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

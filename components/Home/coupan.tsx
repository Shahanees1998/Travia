'use client'
import React, { useState } from 'react'
import { Slider, type SliderChangeEvent } from 'primereact/slider'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'

const Coupan = (): JSX.Element => {
  const [antalSpikar, setAntalSpikar] = useState<number>(2)
  const [skrallvred, setSkrallvred] = useState<number>(2)

  return (
        <div
            id="home"
            className="relative overflow-hidden"
        >
            <div className="container md:mx-auto md:px-4">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-12/12 md:px-4">
                        <div className="bg-light px-2 md:px-8 py-8 rounded-lg mb-5">
                            <h1 className="text-black text-2xl text-center font-semibold">KUPONGSGENERATORN</h1>
                            <div className="items-center flex flex-wrap">
                                <div className="w-full lg:w-4/12 px-4 mt-12">
                                    <div className="mb-[50px] relative">
                                        <label htmlFor="summa" className="text-black text-md">Summa</label>
                                        <input
                                            type="text"
                                            id="summa"
                                            name="summa"
                                            placeholder="0.00"
                                            className="input-bg rounded-full w-full text-body-color dark:text-dark-6 placeholder:text-body-color/60 border px-5 py-3 border-[#FF5E00] dark:border-dark-3 focus:border-primary focus:outline-none"
                                        />
                                        <span className="absolute right-0 mr-5 kp-mt">KP</span>
                                    </div>
                                    <div className="mb-[50px] relative">
                                        <label className="text-black text-md mb-3" style={{ marginBottom: '2rem' }}>Antal spikar</label>
                                        <div className="flex items-center" style={{ marginTop: '1rem' }}>
                                            <Slider
                                                value={antalSpikar}
                                                onChange={(e: SliderChangeEvent) => { setAntalSpikar(e.value as number) }}
                                                min={0}
                                                max={7}
                                                step={0.1}
                                                className="w-full mr-4"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-[50px] relative">
                                        <label className="text-black text-md mb-3">Skrällvred</label>
                                        <div className="flex items-center" style={{ marginTop: '1rem' }}>

                                            <Slider
                                                value={skrallvred}
                                                onChange={(e: SliderChangeEvent) => { setSkrallvred(e.value as number) }}
                                                min={0}
                                                max={7}
                                                step={0.1}
                                                className="w-full mr-4"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        className="rounded-full sm-hold w-full mt-20 bg-primary px-10 py-5 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                                    >
                                        Generera
                                    </button>
                                </div>
                                <div className="w-full lg:w-8/12 px-4 mt-12">
                                    <div className="bg-white rounded-xl px-10 py-5 shadow-lg w-full">
                                        <p className="text-body-color text-center mb-5">7 SEPTEMBER HAGMYREN V75</p>
                                        <p className="text-body-color text-left border-b py-2">AVD HÄSTAR</p>
                                        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                                            <div key={num} className="flex items-center py-3 border-b">
                                                <div className="bg-primary numberBox rounded-full flex justify-center items-center text-white font-semibold mr-5">{num}</div>
                                                <p className="text-black text-center sm-FS">
                                                    {num === 1 && '3 STJÄRNBLOMSTER'}
                                                    {num === 2 && '1 4 7'}
                                                    {num === 3 && '1 2 4'}
                                                    {num === 4 && '1 3 4 5 6 7 8 9 10 11 12 13 14 15'}
                                                    {num === 5 && '4 5 10'}
                                                    {num === 6 && '2 JERKA STING'}
                                                    {num === 7 && '1 4 7 9'}
                                                </p>
                                            </div>
                                        ))}
                                        <p className="text-body-color text-center py-3 mt-5">1 512 RADER x 0,50 KR = 756, 00 KR</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Coupan

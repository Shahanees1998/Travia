import React from 'react'

const Simulator: React.FC = () => {
  return (
    <div
      id="home"
      className="relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-4/12 px-4">
            <div className="bg-white px-8 py-8 rounded-lg mb-5">
              <h4 className="text-black text-xl text-center font-semibold">Parameters</h4>
              <p className="text-gray-7 mb-10 text-md text-center font-normal">
                Baserad på de <br />senaste 2 mån
              </p>
              {['Hästens form', 'Kuskens form', 'Tränarens form', 'Hastighet', 'Distans', 'Spår'].map((text, index) => (
                <button
                  key={index}
                  type="button"
                  className={`bg-${['dark-blue', 'light-orange', 'green', 'red', 'purple', 'light-blue'][index]} mb-${index === 5 ? '4' : '8'} w-full rounded-full px-5 py-3 mt-5 text-white font-semibold`}
                >
                  {text}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-8/12 px-4">
            <div className="bg-white px-6 py-8 rounded-lg mb-5">
              <div className="flex flex-wrap justify-center items-center mb-7 sm:hidden">
                <a href="#"><img className="mr-5" src="/images/hero/pre.png" alt="Previous" /></a>
                <h2 className="text-black text-2xl text-center font-semibold mr-5">2024-09-07 - V75 Jägersro - ADV 1</h2>
                <a href="#"><img src="/images/hero/next.png" alt="Next" /></a>
              </div>

              <div className="hidden sm:flex justify-center items-center mb-7">
                <div className="flex justify-center">
                  <a href="#"><img className="mr-5" src="/images/hero/pre.png" alt="Previous" /></a>
                  <a href="#"><img src="/images/hero/next.png" alt="Next" /></a>
                </div>
                <h2 className="text-black text-2xl text-center font-semibold mr-5">2024-09-07 - V75 Jägersro - ADV 1</h2>
              </div>

              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <tbody>
                    {[
                      { name: '3 Stjärnblomster', star: 1 },
                      { name: '9 Don Klara', star: 2 },
                      { name: '1 Farmens Riska', star: 3 },
                      { name: '4 Ethel', star: 0 },
                      { name: '5 Forspärla', star: 0 },
                      { name: '6 Alfa Lina', star: 0 },
                      { name: '11 Hulte Annika', star: 0 },
                      { name: '8 Ronja N.N', star: 0 }
                    ].map((horse, index) => (
                      <tr key={index} className="bg-white dark:bg-gray-800 dark:border-gray-700">
                        <th className="px-2 py-5 text-left font-normal">
                          {horse.name}
                        </th>
                        {['dark-blue', 'light-orange', 'green', 'red'].map((color, i) => (
                          <td key={i} className="px-1 py-5">
                            <div className={`bg-${color} progressBar rounded-full`}></div>
                          </td>
                        ))}
                        <td className="px-1 py-5">
                          {horse.star > 0 && (
                            <img src={`/images/hero/cup-star-svgrepo-com ${horse.star}.png`} alt={`Star ${horse.star}`} />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Simulator

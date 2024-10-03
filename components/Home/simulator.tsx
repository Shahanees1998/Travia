import React, { useState } from 'react'

const Simulator: React.FC = (): JSX.Element => {
  const events: string[] = [
    '2024-09-07 - V75 Jägersro - ADV 1',
    '2024-09-14 - V75 Solvalla - ADV 2',
    '2024-09-21 - V75 Åby - ADV 3',
    '2024-09-28 - V75 Mantorp - ADV 4'
  ]

  const [currentEventIndex, setCurrentEventIndex] = useState<number>(0)
  const [activeButton, setActiveButton] = useState<number | null>(null)
  const buttonData = [
    { text: 'Hästens form' },
    { text: 'Kuskens form' },
    { text: 'Tränarens form' },
    { text: 'Hastighet' },
    { text: 'Distans' },
    { text: 'Spår' }
  ]

  const handlePrevious = (): void => {
    setCurrentEventIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : events.length - 1
    )
  }

  const handleNext = (): void => {
    setCurrentEventIndex((prevIndex) =>
      prevIndex < events.length - 1 ? prevIndex + 1 : 0
    )
  }

  const handleButtonClick = (index: number): void => {
    setActiveButton(activeButton === index ? null : index)
  }

  const regions = [
    { name: 'Region Kalmar län', values: [53, 21, 26] },
    { name: 'Region Jönköpings län', values: [51, 25, 24] },
    { name: 'Region Gotland', values: [48, 25, 27] },
    { name: 'Region Halland', values: [48, 25, 27] },
    { name: 'Region Uppsala', values: [47, 24, 28] },
    { name: 'Region Dalarna', values: [47, 23, 30] },
    { name: 'Region Kronoberg', values: [46, 25, 29] },
    { name: 'Region Västmanland', values: [45, 27, 28] },
    { name: 'Region Srmland', values: [45, 25, 31] }
    // { name: 'Region Gävleborg', values: [45, 27, 28] },
    // { name: 'Region Östergötland', values: [45, 25, 31] },
    // { name: 'Region Värmland', values: [44, 24, 32] }
  ]

  return (
    <div
      id="home"
      className="relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="items-stretch flex flex-wrap"> {/* Changed from items-start to items-stretch */}
          <div className="w-full lg:w-4/12 px-4 mb-4 lg:mb-0"> {/* Added mb-4 lg:mb-0 */}
            <div className="bg-white py-8 rounded-lg h-full flex flex-col"> {/* Added h-full flex flex-col */}
              <h4 className="text-black text-xl text-center font-semibold">Parametrar</h4>
              <p className="text-gray-7 mb-10 text-md text-center font-normal">
                Baserad på de <br />senaste 2 mån
              </p>
              <div className="flex-grow flex flex-col justify-between"> {/* Added flex-grow flex flex-col justify-between */}
                {buttonData.map((button, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => { handleButtonClick(index) }}
                    className={`${activeButton === index ? 'bgprm' : 'bg-gray-200'} mb-2 w-full px-5 py-3 text-${activeButton === index ? 'white' : 'black'} font-semibold transition-colors duration-300`}
                  >
                    {button.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-8/12 px-4">
            <div className="bg-white px-6 py-8 rounded-lg h-full"> {/* Added h-full */}
              <div className='flex mt-2 items-center justify-between'>
                <button onClick={handlePrevious}><img className="mr-5" src="/images/hero/pre.png" alt="Previous" /></button>
                <h2 className="text-black text-2xl text-center font-semibold mr-5">{events[currentEventIndex]}</h2>
                <button onClick={handleNext}><img src="/images/hero/next.png" alt="Next" /></button>
              </div>

              <div className="relative overflow-x-auto" style={{ marginTop: '2rem' }}>
                {regions.map((region, index) => (
                  <div key={index} className="flex items-center mb-5">
                    <div className="w-1/4 text-right pr-2 whitespace-nowrap overflow-hidden" style={{ minWidth: '200px' }}>{region.name}</div>
                    <div className="w-full curve flex">
                      {region.values.map((value, i) => (
                        <div
                          key={i}
                          style={{
                            width: `${value}%`,
                            height: '30px',
                            backgroundColor: ['#006d77', '#83c5be', '#e29578'][i]
                          }}
                          className="flex items-center justify-center text-white font-bold"
                        >
                          {value}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Simulator

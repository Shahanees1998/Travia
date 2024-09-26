import React from 'react'

const Schedule: React.FC = () => {
  return (
    <div
      id="home"
      className="relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-12/12 px-4">
            <div className="bg-light px-8 py-8 rounded-lg mb-5">
              <h1 className="text-black text-2xl text-center font-semibold">SPELSCHEMA</h1>
              <div className="items-center flex flex-wrap">
                {['V75', 'V86', 'V64'].map((game, index) => (
                  <div key={game} className="w-full lg:w-4/12 px-4 mt-12">
                    <div className="bg-white rounded-xl shadow-lg w-full">
                      <div className={`w-full px-10 py-8 text-5xl text-white text-center font-semibold top-left-radius ${getBgColor(game)}`}>
                        {game}
                      </div>
                      <p className="text-body-color text-center mb-5 font-normal mt-5">
                        {getGameTime(game)}
                      </p>
                      <p className="text-body-color text-center mt-5 pb-8 underline font-semibold cursor-pointer">
                        Se startlista
                      </p>
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

const getBgColor = (game: string): string => {
  switch (game) {
    case 'V75':
      return 'bg-light-orange'
    case 'V86':
      return 'bg-green'
    case 'V64':
      return 'bg-dark-blue'
    default:
      return 'bg-gray-500'
  }
}

const getGameTime = (game: string): string => {
  switch (game) {
    case 'V75':
      return 'Lördag 16:20'
    case 'V86':
      return 'Idag 20:30'
    case 'V64':
      return 'Torsdag 19:30'
    default:
      return ''
  }
}

export default Schedule

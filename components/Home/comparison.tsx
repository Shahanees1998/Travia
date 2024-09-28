import React from 'react'

const Comparison = async (): Promise<JSX.Element> => {
  return (
    <div
      id="home"
      className="relative overflow-hiddeng"
    >
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap mb-10">
          {/* Left column */}
          <div className="w-full lg:w-5/12 px-4 mt-12">
            <SearchForm />
            <HorseCard
              name="CASTOR THE STAR"
              birthDate="2018-05-10"
              gender="Hingst"
              breed="Varmblodig travare"
              stats={{
                starts: '46',
                winPercentage: '30',
                placePercentage: '57',
                record: '8.8ak, 13,7m, 14,7l',
                prizeMoney: '3 410 260 kr'
              }}
            />
          </div>

          {/* VS box */}
          <div className="w-full lg:w-2/12 px-4 mt-12 flex justify-center">
            <div className="bg-primary vs-box rounded-full flex justify-center text-4xl items-center text-white font-semibold">VS</div>
          </div>

          {/* Right column */}
          <div className="w-full lg:w-5/12 px-4 mt-12">
            <SearchForm />
            <HorseCard
              name="JOVIALITY"
              birthDate="2019-04-28"
              gender="Sto"
              breed="Varmblodig travare"
              stats={{
                starts: '46',
                winPercentage: '30',
                placePercentage: '57',
                record: '8.8ak, 13,7m, 14,7l',
                prizeMoney: '3 410 260 kr'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const SearchForm: React.FC = () => (
  <form className="max-w-md mx-auto">
    <div className="relative mb-10">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none search-icon">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
      </div>
      <input type="search" id="default-search" className="block w-full p-4 px-10 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-light focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sök" required />
    </div>
  </form>
)

interface HorseCardProps {
  name: string
  birthDate: string
  gender: string
  breed: string
  stats: {
    starts: string
    winPercentage: string
    placePercentage: string
    record: string
    prizeMoney: string
  }
}

const HorseCard: React.FC<HorseCardProps> = ({ name, birthDate, gender, breed, stats }) => (
  <div className="bg-light rounded-xl py-8 shadow-lg w-full">
    <h3 className="bg-primary px-10 py-5 text-xl font-semibold text-white headingRadius shadow-lg mb-6">
      {name}
    </h3>
    <div className="flex flex-wrap">
      <p className="px-10 py-5 text-md font-semibold text-black">
        Född: <span className="text-body-color font-normal">{birthDate}</span>
      </p>
      <p className="px-10 py-5 text-md font-semibold text-black">
        Kön: <span className="text-body-color font-normal">{gender}</span>
      </p>
    </div>
    <p className="px-10 py-0 text-md font-semibold text-black mb-6">
      Ras: <span className="text-body-color font-normal">{breed}</span>
    </p>
    <div className="px-10">
      <div className="w-full bg-white shadow-lg rounded-xl pb-5">
        <div className="w-full bg-primary px-10 py-3 font-semibold text-lg text-center text-white top-left-radius">Tävlingshistor</div>
        <p className="px-10 text-md font-semibold text-black mt-5">
          Starter: <span className="text-body-color font-normal">{stats.starts}</span>
        </p>
        <p className="px-10 text-md font-semibold text-black py-2">
          Segerprocent: <span className="color-green font-normal">{stats.winPercentage}</span>
        </p>
        <p className="px-10 text-md font-semibold text-black py-2">
          Platsprocent: <span className="color-green font-normal">{stats.placePercentage}</span>
        </p>
        <p className="px-10 text-md font-semibold text-black py-2">
          Rekord: <span className="color-green font-normal">{stats.record}</span>
        </p>
        <p className="px-10 text-md font-semibold text-black py-2">
          Vinstpengar: <span className="color-green font-normal">{stats.prizeMoney}</span>
        </p>
      </div>
    </div>
  </div>
)

export default Comparison

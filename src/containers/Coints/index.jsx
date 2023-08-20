import React from 'react'

function Coints() {
  return (
    <section className="py-20" data-aos="fade-up">
    <div className="container">
      <div className="text-center">
        <h1 className="text-3xl font-medium">Supported coins</h1>
        <p className="font-medium text-slate-500 mt-5 mb-4">
          Fastest way to buy or sell
          <span className="text-slate-900">popular</span> crypto coins.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-14 mt-16">
        <div className="flex items-center gap-5">
          <i className="fa-brands fa-bitcoin text-orange-400 text-5xl" />
          <h4 className="text-base">Bitcoin</h4>
        </div>
        <div className="flex items-center gap-5">
          <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center">
            <i className="fa-brands fa-ethereum text-white text-3xl" />
          </div>
          <h4 className="text-base">Ethereum</h4>
        </div>
        <div className="flex items-center gap-5">
          <div className="h-12 w-12 bg-emerald-700 rounded-full flex items-center justify-center">
            <i className="fa-solid fa-t text-white text-2xl" />
          </div>
          <h4 className="text-base">Tether</h4>
        </div>
        <div className="flex items-center gap-5">
          <div className="h-12 w-12 bg-sky-500 rounded-full flex items-center justify-center">
            <i className="fa-solid fa-lock text-white text-2xl" />
          </div>
          <h4 className="text-base">Chainlink</h4>
        </div>
        <div className="flex items-center gap-5">
          <div className="h-12 w-12 bg-red-500 rounded-full flex items-center justify-center">
            <i className="fa-solid fa-diamond text-white text-2xl" />
          </div>
          <h4 className="text-base">Basic Attention Token</h4>
        </div>
        <div className="flex items-center gap-5">
          <div className="h-12 w-12 bg-sky-500 rounded-full flex items-center justify-center">
            <i className="fa-brands fa-dochub text-white text-2xl" />
          </div>
          <h4 className="text-base">Dash</h4>
        </div>
        <div className="flex items-center gap-5">
          <div className="h-12 w-12 bg-amber-300 rounded-full flex items-center justify-center">
            <i className="fa-brands fa-dropbox text-white text-2xl" />
          </div>
          <h4 className="text-base">Binance Coin</h4>
        </div>
        <div className="flex items-center gap-5">
          <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center">
            <i className="fa-brands fa-tiktok text-white text-2xl" />
          </div>
          <h4 className="text-base">Tezos</h4>
        </div>
      </div>
      <div className="text-center mt-16">
        <a
          href="#"
          className="py-3 px-6 rounded border border-primary text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500"
        >
          View complete list{" "}
          <i className="fa-solid fa-arrow-right ms-2" />
        </a>
      </div>
    </div>
  </section>
  )
}

export default Coints
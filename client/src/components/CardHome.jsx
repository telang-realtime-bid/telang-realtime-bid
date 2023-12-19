import React from 'react'

const CardHome = ({ auction }) => {
  function setCurrency(price) {
    return price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })
  }
  return (
    <>
      <div className="card w-80 shadow-xl relative cursor-pointer">
        <div className="overlay absolute top-0 left-0 right-0 bottom-0 rounded-3xl bg-gray-900 opacity-10"></div>
        <img src={auction.imageUrl} alt="picture" className='rounded-3xl h-96' />
        <div className="overlay-content absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-lg text-center p-10 font-bold mb-2">{auction.name}</h2>
          <p className="text-lg mb-4 font-bold">{setCurrency(auction.currentBid)}</p>
          <button className="btn text-base bg-base-100 hover:bg-base-300 rounded-xl">Bid</button>
        </div>
      </div>
    </>
  )
}

export default CardHome
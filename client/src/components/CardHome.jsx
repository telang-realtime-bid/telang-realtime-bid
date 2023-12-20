import React from 'react'

const CardHome = ({ auction }) => {
  function setCurrency(price) {
    return price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })
  }
  return (
    <>
      <div className="card w-72 shadow-xl bg-base-300 p-5 rounded-3xl relative cursor-pointer">
        {/* <div className="overlay absolute top-0 left-0 right-0 bottom-0 rounded-3xl bg-gray-900 opacity-10"></div> */}
        <img src={auction.imageUrl} alt="picture" className='rounded-3xl h-72' />
        <div className="overlay-content absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-white">
          <p className="text-lg mb-12 text-center font-bold">{setCurrency(auction.currentBid)}</p>
          <button className="btn text-base bg-base-300 hover:bg-base-100 rounded-xl">Bid</button>
        </div>
        <h2 className="text-md text-center text-base-secondary p-7 font-thin">{auction.name}</h2>
      </div>
    </>
  )
}

export default CardHome
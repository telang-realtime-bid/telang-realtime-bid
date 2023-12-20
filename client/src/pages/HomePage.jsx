import React, { useEffect } from 'react'
import CardHome from '../components/CardHome'
import { fetchHome } from '../store/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import socket from '../socket'


const HomePage = () => {
  let dispatch = useDispatch()
  let { dataHome, loadingHome } = useSelector((state) => state.appReducer)

  useEffect(() => {
    socket.connect()
    dispatch(fetchHome())

    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <>
      {loadingHome ? (
        <div className="m-10">
          <div className="mockup-window border bg-base-200 p-10 flex flex-col items-center">
            <h2 className="font-bold flex justify-center font-serif mb-7 text-2xl text-primary-500">Loading...</h2>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        </div>
      ) : (
        <section className='bg-base-100 p-10 min-h-screen'>
          <div className="container">
            <h1 className="text-center text-xl font-bold font-serif text-base-content">Let's Auction!</h1>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-10">

            {dataHome && dataHome.map(auction => {
              return <CardHome key={auction.id} auction={auction} />
            })}

          </div>

        </section>
      )}

    </>
  )
}

export default HomePage
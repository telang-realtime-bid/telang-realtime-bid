import React, { useEffect } from 'react'
import CardHome from '../components/CardHome'
import { fetchHome } from '../store/appSlice'
import { useDispatch, useSelector } from 'react-redux'

const HomePage = () => {
  let dispatch = useDispatch()
  let { dataHome } = useSelector((state) => state.appReducer)

  useEffect(() => {
    dispatch(fetchHome())
  }, [])

  return (
    <>
      <>
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
      </>
    </>
  )
}

export default HomePage
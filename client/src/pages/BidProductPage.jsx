import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BidProductPage = () => {
  let { productId } = useParams()
  let [product, setProduct] = useState({})
  let [loading, setLoading] = useState(true)

  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  async function fetchById() {
    try {
      let link = import.meta.env.VITE_BASE_URL + `/product/${productId}`
      let { data } = await axios({
        method: 'get',
        url: link,
        headers: {
          Authorization: 'Bearer ' + localStorage.access_token
        }
      })
      setProduct(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchById()
  }, [])

  function setCurrency(price) {
    return price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })
  }

  return (
    <>
      {loading ? (
        <div className="m-10">
          <div className="mockup-window border bg-base-200 p-10 flex flex-col items-center">
            <h2 className="font-bold flex justify-center font-serif mb-7 text-2xl text-primary-500">Loading...</h2>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        </div>
      ) : (
        <section>
          <div className="m-10">
            <div className="mockup-window border bg-base-200 p-10">
              <h2 className="font-bold flex justify-center font-serif mb-7 text-2xl text-primary-500">{product.name}</h2>
            </div>
            <div className="card border lg:card-side mt-4 shadow-xl">
              <figure>
                <div className="card w-[500px] shadow-xl bg-base-300 p-5 relative cursor-pointer">
                  <img src={product.imageUrl} alt="picture" className='rounded-3xl h-96' />
                  <button onClick={openModal} className="btn mt-10 text-base bg-base-200 hover:bg-base-100 rounded-xl">See Product</button>
                  <h1 className="text-md text-center text-base-secondary p-7 mt-3 font-thin">{product.name}</h1>
                  <p className="text-lg mb-8 text-center font-bold">Current Bid : {setCurrency(product.currentBid)}</p>
                  <p className="font-thin mb-12 text-justify">Description : {product.description}</p>
                </div>
              </figure>

              {isModalOpen && (
                <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-75 flex items-center justify-center">
                  <div className="relative mx-auto max-w-3xl w-[500px]">
                    <button onClick={closeModal} className="absolute top-4 right-4 text-black text-xl">&times;</button>
                    <img src={product.imageUrl} alt="Large Product" className="rounded-xl" />
                  </div>
                </div>
              )}

              <div className="card-body bg-base-200">
                <div className="indicator mb-3">
                  <div className="indicator-item indicator-botto bg-base-100m">
                    <span className="indicator-item badge rounded-lg badge-secondary text-purple-300 p-3 bg-base-100">Best Offer!</span>
                  </div>
                  <div className="card border">
                    <div className="card-body">
                      <h1 className="card-title">Bid : {setCurrency(product.currentBid)}</h1>
                    </div>
                  </div>
                </div>

                <div className='chat-box bg-base-secondary border '>
                  <div className='chat-header bg-base-300'>
                    <p className='text-base p-3 font-thin text-center'>{product.name}</p>
                  </div>
                  <div className='p-4  h-[500px]'>
                    <div className="chat chat-end">
                      <div className="chat-bubble">isi pesan</div>
                      <div className="chat-footer opacity-50">
                        <span>Delivered </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-actions justify-left">
                  <a className="btn bg-base-100 rounded-xl" href='/'>Back To Home</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default BidProductPage
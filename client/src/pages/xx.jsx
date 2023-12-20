import React, { useEffect } from "react";
import CardHome from "../components/CardHome";
import { fetchHome } from "../store/appSlice";
import { useDispatch, useSelector } from "react-redux";
import Testimony from "../components/Testimony";

const HomePage = () => {
  let dispatch = useDispatch();
  let { dataHome } = useSelector((state) => state.appReducer);

  useEffect(() => {
    dispatch(fetchHome());
  }, []);

  return (
    <>
      <>
        {/* Carousel */}
        <div className="carousel w-full object-cover mb-0">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="/banner1.png" className="w-full " />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="/banner2.png" className="w-full " />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="/banner3.png" className="w-full " />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="/banner4.png" className="w-full " />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        {/* Flag */}
        <div className="navbar bg-orange-500 text-neutral-content items-center justify-center mt-0 mb-0">
          <button className="btn btn-ghost text-xl text-white">
            FREE BID FOR NOW AND GET THE SPECIAL ITEMS WITH SPECIAL OFFER!
          </button>
        </div>
        {/* Cards */}
        <section className="bg-base-100 p-10 min-h-screen">
          <div className="container"></div>
          <div className="mt-10 flex flex-wrap justify-center gap-10">
            {dataHome &&
              dataHome.map((auction) => {
                return <CardHome key={auction.id} auction={auction} />;
              })}
          </div>
          </section>
          {/* Footering */}
          <div
            className="hero min-h-screen mt-40 bg-cover bg-no-repeat object-cover"
            style={{
              backgroundImage:
                "url(https://lloydsauctions.imgix.net/wp-content/uploads/2018/07/online-auctions-gold-coast-australia-768x333.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="h-full w-full mx-auto">
                <img src="./logo.png" alt="Logo" className="mx-auto" />
                <h1 className="mb-5 text-4xl font-bold text-orange-400">
                  No.1 Best Auction Online Store On The World
                </h1>
                <p className="mb-5 text-xl text-black font-bold">
                  An online auction store is a virtual marketplace where buyers
                  and sellers come together to engage in the buying and selling
                  of various goods and services through electronic auction
                  process. Best service very fast and responsive. Easy to
                  payment.
                </p>
              </div>
            </div>
          </div>
          <h1 className="mt-20 text-4xl font-bold text-center text-orange-400">
            TESTIMONY CUSTOMER'S:
          </h1>
          <Testimony/>
        
      </>
    </>
  );
};

export default HomePage;

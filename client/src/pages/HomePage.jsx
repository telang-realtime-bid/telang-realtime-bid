import React, { useEffect } from "react";
import CardHome from "../components/CardHome";
import { fetchHome } from "../store/appSlice";
import { useDispatch, useSelector } from "react-redux";

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
          {/* Testimony1 */}
          <div className="flex justify-center mt-40">
            <div className="card card-side bg-base-100 shadow-xl mt-20 mx-5">
              <figure>
                <img
                  src="https://i0.wp.com/celebeatonline.com/wp-content/uploads/2022/02/163646839_151261790203234_4588702925784176269_n-1.jpg?w=956&ssl=1"
                  alt="Photo"
                  className="object-cover w-48 h-48"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Kim Ji-Soo</h2>
                <p>
                  You won't regret bidding at this auction.
                  <br />
                  because the items are definitely quality
                </p>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
            {/* Testimony2 */}
            <div className="card card-side bg-base-100 shadow-xl mt-20 mx-5">
              <figure>
                <img
                  src="https://e0.pxfuel.com/wallpapers/647/937/desktop-wallpaper-yeji-itzy-loco.jpg"
                  alt="Photo"
                  className="object-cover w-48 h-48"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Hwang Ye Ji</h2>
                <p>
                  The Items Are Authentic.
                  <br />
                  100% Trusted and recommended.
                </p>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
            {/* Testimony2 */}
            <div className="card card-side bg-base-100 shadow-xl mt-20 mx-5">
              <figure>
                <img
                  src="https://i.pinimg.com/736x/16/4b/4d/164b4d37eef5f88838b4b922ec6f0973.jpg"
                  alt="Photo"
                  className="object-cover w-48 h-48"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Kazuha Nakamura</h2>
                <p>
                  At This Auction I Got My Favourite Item
                  <br />
                  What I Want With The Best Price
                </p>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default HomePage;

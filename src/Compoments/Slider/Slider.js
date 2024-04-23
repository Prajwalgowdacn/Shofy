import React from "react";
import "./Slider.css";
import "bootstrap/dist/css/bootstrap.min.css";

import slider1 from "../uploads/slider-1.png";
import slider2 from "../uploads/slider-2.png";
import slider3 from "../uploads/slider-3.png";

// import fashion1 from "../uploads/Home two_files/fashion-cat-1.jpg"
// import fashion2 from "../uploads/Home two_files/fashion-cat-2.jpg"
// import fashion3 from "../uploads/Home two_files/fashion-cat-3.jpg"


export const Slider = () => {
  return (<div className="slider">
    <div className="container-fluid bg-light p-100px">
      <div
        id="customCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="tp-slider-content-2">
                    <span>New Arrivals 2023</span>
                    <h3 className="tp-slider-title-2">
                      The Clothing Collection
                    </h3>
                    <div className="tp-slider-btn-2">
                      <a href="/" className="tp-btn tp-btn-border">
                        Shop Collection
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="tp-slider-thumb-2-wrapper p-relative">
                    {/* <div className="tp-slider-thumb-2-shape float mt-10">
                      <img
                        className="tp-slider-thumb-2-shape-1"
                        src="https://shofy-nuxt.vercel.app/img/slider/2/shape/shape-2.png"
                        alt="shape"
                      />
                     <img className="tp-slider-thumb-2-shape-2" src="https://shofy-nuxt.vercel.app/img/slider/2/shape/shape-3.png" alt="shape" /> 
                    </div> */}
                    <div className="tp-slider-thumb-2 text-end">
                      <span className="tp-slider-thumb-2-gradient"></span>
                      <img src={slider1} alt="main-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Item 2 */}
          <div className="carousel-item">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="tp-slider-content-2">
                    <span>New Arrivals 2023</span>
                    <h3 className="tp-slider-title-2">
                      The Clothing Collection
                    </h3>
                    <div className="tp-slider-btn-2">
                      <a href="/shop" className="tp-btn tp-btn-border">
                        Shop Collection
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="tp-slider-thumb-2-wrapper p-relative">
                    <div className="tp-slider-thumb-2-shape float"></div>
                    <div className="tp-slider-thumb-2 text-end">
                      <img src={slider2} alt="main-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Item 3 */}
          <div className="carousel-item">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="tp-slider-content-2">
                    <span>New Arrivals 2023</span>
                    <h3 className="tp-slider-title-2">
                      The Clothing Collection
                    </h3>
                    <div className="tp-slider-btn-2">
                      <a href="/shop" className="tp-btn tp-btn-border">
                        Shop Collection
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="tp-slider-thumb-2-wrapper p-relative">
                    <div className="tp-slider-thumb-2-shape float"></div>
                    <div className="tp-slider-thumb-2 text-end">
                      <img src={slider3} alt="main-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#customCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#customCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>




      {/* <section className="tp-banner-area mt-20">
        <div className="container-fluid tp-gx-40">
          <div className="row tp-gx-20">
            <div className="col-xxl-4 col-lg-6">
              <div className="tp-banner-item-2 p-relative z-index-1 grey-bg-2 mb-20 fix">
                <div
                  className="tp-banner-thumb-2 include-bg transition-3"
                  style={{backgroundImage: `url(${fashion1})`}}
                ></div>
                <h3 className="tp-banner-title-2">
                  <a className="cursor-pointer">Clothing</a>
                </h3>
                <div className="tp-banner-btn-2">
                  <a className="tp-btn tp-btn-border tp-btn-border-sm cursor-pointer">
                    {" "}
                    Shop Now{" "}
                    <svg
                      width="17"
                      height="14"
                      viewBox="0 0 17 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 6.99976L1 6.99976"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M9.9502 0.975414L16.0002 6.99941L9.9502 13.0244"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-6">
              <div className="tp-banner-item-2 p-relative z-index-1 grey-bg-2 mb-20 fix">
                <div
                  className="tp-banner-thumb-2 include-bg transition-3"
                  style={{backgroundImage:`url(${fashion2})`}}
                ></div>
                <h3 className="tp-banner-title-2">
                  <a className="cursor-pointer">Bags</a>
                </h3>
                <div className="tp-banner-btn-2">
                  <a className="tp-btn tp-btn-border tp-btn-border-sm cursor-pointer">
                    {" "}
                    Shop Now{" "}
                    <svg
                      width="17"
                      height="14"
                      viewBox="0 0 17 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 6.99976L1 6.99976"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M9.9502 0.975414L16.0002 6.99941L9.9502 13.0244"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-6">
              <div className="tp-banner-item-2 p-relative z-index-1 grey-bg-2 mb-20 fix">
                <div
                  className="tp-banner-thumb-2 include-bg transition-3"
                  style={{backgroundImage: `url(${fashion3})`}}
                ></div>
                <h3 className="tp-banner-title-2">
                  <a className="cursor-pointer">Shoes</a>
                </h3>
                <div className="tp-banner-btn-2">
                  <a className="tp-btn tp-btn-border tp-btn-border-sm cursor-pointer">
                    {" "}
                    Shop Now{" "}
                    <svg
                      width="17"
                      height="14"
                      viewBox="0 0 17 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 6.99976L1 6.99976"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M9.9502 0.975414L16.0002 6.99941L9.9502 13.0244"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
    </div>
  );
};

export default Slider;

import React from "react";
import './Newsletter.css'
import "bootstrap/dist/css/bootstrap.min.css";

const NewsLetter = () => {
  return (<div className="mt-400px">
    <div className="newsletter">
      <div
        id="carouselExampleControls"
        data-bs-ride="carousel"
        className="carousel slide text-center carousel-dark"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="rounded-circle shadow-1-strong mb-4"
              src="https://shofy-nuxt.vercel.app/img/users/user-2.jpg"
              alt="avatar"
              style={{ width: "150px" }}
            />
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h5 className="mb-3">Theodore Handle</h5>
                <p>CO Founder</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i>
                  How you use the city or town name is up to you. 
                  All results may be freely used in any work.”
                  
                </p>
              </div>
            </div>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="far fa-star fa-sm"></i>
              </li>
            </ul>
          </div>
          <div className="carousel-item">
            <img
              className="rounded-circle shadow-1-strong mb-4"
              src="https://shofy-nuxt.vercel.app/img/users/user-3.jpg"
              alt="avatar"
              style={{ width: "150px" }}
            />
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h5 className="mb-3">John Smith</h5>
                <p>UI/UX Designer</p>
                <pre className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i>
                  “Very happy with our choice to take our daughter to Brave care. 
                  The entire team was great! Thank you!”
                </pre>
              </div>
            </div>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="far fa-star fa-sm"></i>
              </li>
            </ul>
          </div>
          <div className="carousel-item">
            <img
              className="rounded-circle shadow-1-strong mb-4"
              src="https://shofy-nuxt.vercel.app/img/users/user-4.jpg"
              alt="avatar"
              style={{ width: "150px" }}
            />
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h5 className="mb-3">Samil Rana</h5>
                <p>Web developer</p>
                <pre className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i>
                  “Thanks for all your efforts and teamwork over the last several months!
                  Thank you so much”
                </pre>
              </div>
            </div>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm"></i>
              </li>
              <li>
                <i className="far fa-star fa-sm"></i>
              </li>
            </ul>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
  );
};

export default NewsLetter;

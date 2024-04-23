import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../uploads/logo.svg";

const Footer = () => {
  return (
    <div className="footer mt-8">
      <div className="container-fluid my-5 ">
        <footer
          className="text-center text-lg-start text-dark"
          style={{ backgroundColor: "#ECEFF1" }}
        >
          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div
                  className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 "
                  style={{
                    marginTop: "40px",
                  }}
                >
                  <img src={logo} alt="logo" />

                  <p className="mt-3">
                    We are a team of designers and developers that create high
                    quality WordPress
                  </p>
                  <div>
                    <a
                      href="https://www.facebook.com/"
                      className="text-info me-4"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://twitter.com/i/flow/login"
                      className="text-info me-4"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="https://www.google.co.in/webhp"
                      className="text-info me-4"
                    >
                      <i className="fab fa-google"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/?hl=en"
                      className="text-info me-4"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>

                <div
                  className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 "
                  style={{
                    marginTop: "40px",
                  }}
                >
                  <h6 className="text-uppercase fw-bold">My Account</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <a href="/" className="text-dark">
                      Track Orders
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-dark">
                      Shipping
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-dark">
                      Wishlist
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-dark">
                      My Account
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-dark">
                      Order History
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-dark">
                      Returns
                    </a>
                  </p>
                </div>

                <div
                  className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 "
                  style={{
                    marginTop: "40px",
                  }}
                >
                  <h6 className="text-uppercase fw-bold">Useful Links</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <a href="/" className="text-dark">
                      Out Story
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-dark">
                      Careers
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-dark">
                      Privacy Policy
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-dark">
                      Terms & Conditions
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-dark">
                      Latest News
                    </a>
                  </p>
                  <p>
                    <a href="/" className="text-dark">
                      Contact Us
                    </a>
                  </p>
                </div>

                <div
                  className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"
                  style={{
                    marginTop: "40px",
                  }}
                >
                  <h6 className="text-uppercase fw-bold">Talk To Us</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "#7c4dff",
                      height: "2px",
                    }}
                  />
                  <p>
                    <i className="fas fa-home me-3"></i> 79 Sleepy Hollow St.
                    Jamaica. New York 1432
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3"></i> shofy@suppourt.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3"></i> +670 413 90 762
                  </p>
                  
                </div>
              </div>
            </div>
          </section>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2024 Copyright: 
            <a className="text-dark" href="https://mdbootstrap.com/">
              All Rights Reserved | vue nuxt 3 Template by ThemePure
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

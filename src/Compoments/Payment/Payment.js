import React from "react";
import "./Payment.css";
import "bootstrap/dist/css/bootstrap.min.css";

const PaymentComponent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the payment with the entered card details
    console.log('Payment processed!');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="card border shadow rounded p-10">
            <div className="card-body">
              <h2 className="card-title">Enter Card Details</h2>
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="cardNumber">Card Number</label>
                      <input
                        type="text"
                        id="cardNumber"
                        className="form-control m-2"
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="cardHolder">Card Holder</label>
                      <input
                        type="text"
                        id="cardHolder"
                        className="form-control m-2"
                        placeholder="Prajwal Gowda"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="expirationMonth">Expiration Month</label>
                      <input
                        type="text"
                        id="expirationMonth"
                        className="form-control m-2"
                        placeholder="MM"
                        required
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="expirationYear">Expiration Year</label>
                      <input
                        type="text"
                        id="expirationYear"
                        className="form-control m-2"
                        placeholder="YYYY"
                        required
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" onClick={() => alert("Successfully placed the order")} className="btn btn-primary">Place Orded</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
export default PaymentComponent;

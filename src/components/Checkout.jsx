// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../HelperComponents/StoreProvider";

export default function Checkout() {
  const store = useStore();
  const navigate = useNavigate();

  var price = 0;
  {
    store.cartData.map((d) => {
      price = price + d.Price;
    });
  }

  const [data, setData] = useState(null);

  useEffect(() => {
    getProfileData();
  }, []);

  const getProfileData = async () => {
    const res = await store.myProfile();
    setData(res);
  };
  return (
    <div>
      <button className="btn btn-dark my-2" onClick={() => navigate("/mycart")}>
        Go Back
      </button>
      <div className="container">
        <div className="row">
          {store.cartData.length > 0 && (
            <div className="col-md-4 my-3 d-flex justify-content-end">
              <div className=" ">
                <div className="border py-4 px-4">
                  <h5>PRICE DETAILS ({store.cartData.length} Items)</h5>
                  <hr></hr>
                  {store.cartData.map((data, index) => {
                    return (
                      <div key={data.id} className="">
                        <span className="">
                          {index + 1})-{data.title}
                        </span>
                        <p className="text-end ">₹ {data.Price}</p>
                      </div>
                    );
                  })}
                  Delivery Charges <p className="text-end"> ₹ 100</p>
                  <hr></hr>
                  <span className="fw-bold ">
                    Total Amount <p className="text-end">₹ {price + 100}</p>
                  </span>
                  <hr></hr>
                  <h4>Delievery Address</h4>
                  {data ? (
                    <>
                      <span className="fw-bold">{data?.name}</span>
                      <br></br>
                      <span>{data?.phone}</span>
                      <p>{data?.address}</p>
                    </>
                  ) : (
                    <>
                      <span className="text-danger">
                        Please Update Address in Profile Section
                      </span>
                    </>
                  )}
                  <hr />
                  <h4>Payment Selection</h4>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      UPI Payments
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Credit/ Debit Card
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      Cash on Delievery
                    </label>
                  </div>
                  <button
                    className="btn btn-danger my-4"
                    onClick={() => navigate("/checkout")}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

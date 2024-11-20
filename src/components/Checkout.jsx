// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../HelperComponents/StoreProvider";
import toast from "react-hot-toast";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Checkout() {
  const store = useStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  var price = 0;
  {
    store.cartData.map((d) => {
      price = price + d.Price;
    });
  }

  const [data, setData] = useState(null);

  useEffect(() => {
    getProfileData();
    store.cartData.length == 0 && navigate("/mycart");
  }, [store.cartData]);

  const getProfileData = async () => {
    const res = await store.myProfile();
    setData(res);
  };

  const removeFromCart = (id) => {
    store.removeProduct(id);
    toast.success("Product Removed Successfully");
  };

  const handlePlaceOrder = async () => {
    setLoading(true);
    const res = await store.addOrderDetails(
      store.cartData,
      store.loginUser.uid
    );
    store.removeAllItems();
    toast.success("Order Placed Successfully");
    setLoading(false);
    navigate("/");
  };
  return (
    <div>
      <button className="btn btn-dark my-2" onClick={() => navigate("/mycart")}>
        Go Back{console.log(store.loginUser, "login ")}
      </button>
      <div className="container ">
        {/* <h2 className="text-center">Checkout Details </h2> */}
        <div className="row d-flex justify-content-center">
          {store.cartData.length > 0 && (
            <div className="col-md-4 my-3">
              <div className=" ">
                <div className="border py-4 px-4" style={{ width: "380px" }}>
                  <h3 style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                    PRICE DETAILS ({store.cartData.length} Items)
                  </h3>
                  <hr></hr>
                  {store.cartData.map((data, index) => {
                    return (
                      <div key={data.id} className="">
                        <span className="">
                          {index + 1})-{data.title}{" "}
                        </span>
                        <p className="text-end ">
                          ₹ {data.Price}{" "}
                          <DeleteIcon
                            onClick={() => removeFromCart(data.id)}
                            style={{ cursor: "pointer", marginLeft: "15px" }}
                          ></DeleteIcon>{" "}
                        </p>{" "}
                      </div>
                    );
                  })}
                  <span className="fw-bold"> Delivery Charges </span>
                  <p className="text-end"> ₹ 100</p>
                  <hr></hr>
                  <span className="fw-bold ">
                    Total Amount <p className="text-end">₹ {price + 100}</p>
                  </span>
                  <hr></hr>
                  <h4>Payment Selection</h4>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      disabled={true}
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
                      disabled
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
                  <hr />
                  <h4>Delivery Address</h4>
                  {data ? (
                    <>
                      <p>
                        {" "}
                        Name: <span className="fw-bold">{data?.name}</span>
                        <br></br>
                        Phone: <span className="fw-bold">{data?.phone}</span>
                        <br></br>
                        Address:{" "}
                        <span className="fw-bold">{data?.address}</span>
                      </p>
                    </>
                  ) : (
                    <>
                      <span className="text-danger fs-4">
                        {store.loginUser?.uid
                          ? " Please Update Address in Profile Section !"
                          : "Please login to place order!"}
                      </span>
                    </>
                  )}
                  <br></br>
                  <button
                    className={`btn btn-danger my-4 `}
                    onClick={() => handlePlaceOrder()}
                    disabled={!data || loading}
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

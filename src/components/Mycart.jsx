import React, { useEffect, useState } from "react";
import { useStore } from "../HelperComponents/StoreProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Mycart() {
  const store = useStore();
  const navigate = useNavigate();

  const removeFromCart = (id) => {
    store.removeProduct(id);
    toast.success("Product Removed Successfully");
  };

  var price = 0;
  {
    store.cartData.map((d) => {
      price = price + d.Price;
    });
  }

  return (
    <>
      <h1 className=" d-flex justify-content-center  ">
        <u
          className="mt-3"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          MY CART
        </u>
      </h1>
      {store.cartData.length < 1 && (
        <div className="table1 m-3">
          <h4
            style={{ height: "360px" }}
            className="d-flex justify-content-center align-items-center"
          >
            Your Cart is Empty{" "}
            <button className="btn btn-primary" onClick={() => navigate("/")}>
              {" "}
              Shop Now
            </button>
          </h4>
        </div>
      )}
      <div className="container ">
        <div className="row px-3">
          <div className="col-md-8 px-3 ">
            {store.cartData.map((data) => {
              return (
                <div className="col-md-12 border px-5 py-3  my-3" key={data.id}>
                  <div className="car ">
                    <div className="card-body">
                      <h3 className="card-title">{data.brand}</h3>
                      <h5 className="card-title">{data.title}</h5>
                      <img src={data?.url} />
                      <p className="card-text">{data.description}</p>
                      <h2>Rs.{data.Price}</h2>
                      <button
                        className="btn btn-primary mx-1"
                        onClick={() => removeFromCart(data.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {store.cartData.length > 0 && (
            <div className="col-md-4 my-3 d-flex justify-content-end">
              <div className=" ">
                <div className="border py-4 px-4">
                  <h4>PRICE DETAILS ({store.cartData.length} Items)</h4>
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
                  <button
                    className="btn btn-danger "
                    onClick={() => navigate("/checkout")}
                  >
                    Checkout
                  </button>
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      store.removeAllItems(),
                        toast.success("All Items are removed from cart");
                    }}
                  >
                    Remove All
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

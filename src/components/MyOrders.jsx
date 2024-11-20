import React, { useEffect, useState } from "react";
import { useStore } from "../HelperComponents/StoreProvider";
import { useNavigate } from "react-router-dom";

export default function MyOrders() {
  const store = useStore();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getAllOrders = async () => {
    const res = await store.fetchOrdersByOrderBy(store.loginUser.uid);
    setData(res);
  };

  const dateAndTimeFormat = (timeStamp) => {
    const date = new Date(timeStamp.seconds * 1000);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      // second: "2-digit",
    });

    return { formattedDate, formattedTime };
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  let serialNumber = 1;
  return (
    <div>
      <div className="container" style={{ minHeight: "380px" }}>
        <h2
          className="my-4"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          {" "}
          Orders Details
        </h2>
        <div className="row table1">
          <table class=" ">
            <thead className="">
              <tr>
                <th>S.No.</th>
                <th>Product Name</th>
                <th>Product Image</th>
                <th>Price</th>
                <th>Order Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((d, index) => {
                  return d.productDetails.map((item, subIndex) => {
                    return (
                      <tr
                        key={`${index}-${subIndex}`}
                        style={{ borderBlockEnd: "1px solid grey" }}
                      >
                        <td>{serialNumber++}</td>
                        <td>{item.title}</td>
                        <td>
                          <img
                            src={item?.url}
                            height={"65px"}
                            width={"100px"}
                          />
                        </td>
                        <td>₹ {item.Price}</td>
                        <td>
                          {d.createdAt &&
                            `${dateAndTimeFormat(d.createdAt).formattedDate} ${
                              dateAndTimeFormat(d.createdAt).formattedTime
                            }`}
                        </td>
                      </tr>
                    );
                  });
                })
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    style={{
                      textAlign: "center",
                      verticalAlign: "middle",
                      height: "300px", // Adjust this height as per your requirement
                      alignItems: "center", // Vertically centers content
                    }}
                  >
                    <h4>
                      {" "}
                      Currently No Orders !{" "}
                      <button
                        className="btn btn-primary"
                        onClick={() => navigate("/")}
                      >
                        {" "}
                        Shop Now
                      </button>
                    </h4>
                  </td>
                </tr>
              )}
              {/* <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
                <td>Mary</td>
                <td>Moe</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

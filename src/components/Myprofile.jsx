import React, { useEffect, useState } from "react";
import { useStore } from "../HelperComponents/StoreProvider";
import { useNavigate } from "react-router-dom";

export default function Myprofile() {
  const store = useStore();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getProfileData();
  }, []);

  const getProfileData = async () => {
    const res = await store.myProfile();
    setData(res);
  };
  return (
    <div className="container mt-4">
      <div className="row ">
        <div style={{ minHeight: "350px" }} className="col-md-12  my-2 ">
          <h1
            className=""
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            My Profile
          </h1>
          <table className="table  ">
            <tbody>
              <tr>
                <th scope="row">Name</th>
                <td>{data?.name ?? "--"}</td>
              </tr>
              <tr>
                <th scope="row">Email</th>
                <td>{store?.loginUser.email ?? "--"}</td>
              </tr>

              <tr>
                <th scope="row">Phone No.</th>
                <td>{data?.phone ?? "--"}</td>
              </tr>
              <tr>
                <th scope="row">Address</th>
                <td>{data?.address ?? "--"}</td>
              </tr>
            </tbody>
          </table>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/updateprofile")}
          >
            Update Details
          </button>
        </div>
      </div>
    </div>
  );
}

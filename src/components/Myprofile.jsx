import React, { useEffect, useState } from "react";
import { useStore } from "../HelperComponents/StoreProvider";

export default function Myprofile() {
  const store = useStore();
  const [data, setData] = useState(null);

  useEffect(() => {
    getProfileData();
  }, []);

  const getProfileData = async () => {
    const res = await store.myProfile();
    setData(res);
  };
  return (
    <div style={{ height: "400px" }}>
      <h2 className="my-3">My Profile</h2>
      <table className="table my-2">
        <tbody>
          <tr>
            <th scope="row">Name</th>
            <td>{data?.name}</td>
          </tr>
          <tr>
            <th scope="row">Email</th>
            <td>{data?.address}</td>
          </tr>
          <tr>
            <th scope="row">Phone No.</th>
            <td>{data?.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

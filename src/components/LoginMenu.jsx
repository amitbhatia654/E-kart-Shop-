import React, { useEffect, useState } from "react";
import { useStore } from "../HelperComponents/StoreProvider";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import GradingIcon from "@mui/icons-material/Grading";
import LogoutIcon from "@mui/icons-material/Logout";

export default function LoginMenu() {
  const store = useStore();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const getProfileData = async () => {
    const res = await store.myProfile();
    setName(res.name);
  };

  useEffect(() => {
    getProfileData();
  }, []);
  return (
    <>
      <span className="btn-group">
        <span className="btn btn-light">Hey, {name ? name : "User"}</span>
        <button
          type="button"
          className="btn btn-dark dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu">
          <li>
            <button
              className="dropdown-item"
              onClick={() => navigate("/myprofile")}
            >
              <PersonIcon></PersonIcon> My Profile
            </button>
          </li>

          <li>
            <button
              className="dropdown-item"
              onClick={() => navigate("/myorders")}
            >
              <GradingIcon></GradingIcon> MY Orders
            </button>
          </li>

          <li>
            <button
              className="btn btn-danger mx-3"
              onClick={() => {
                store.logout(), navigate("/");
              }}
            >
              <LogoutIcon></LogoutIcon> Logout
            </button>
          </li>
        </ul>
      </span>
    </>
  );
}

import React from "react";
// import * as React from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";

import { useStore } from "../HelperComponents/StoreProvider";
import LoginMenu from "./LoginMenu";
import { BorderAll } from "@mui/icons-material";

const drawerWidth = 240;
const navItems = ["/", "Mobiles", "Laptops", "Electronics", "Grocery"];

export default function Navbar(props) {
  const navigate = useNavigate();
  const store = useStore();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  // onClick = { handleDrawerToggle };
  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <span
          onClick={() => {
            navigate("/");
            handleDrawerToggle();
          }}
        >
          {" "}
          E-Kart <span className="text-warning">Shop</span>
        </span>
      </Typography>
      <Divider />
      {navItems.map((item) => (
        <ListItem
          key={item}
          disablePadding
          onClick={() => handleDrawerToggle()}
        >
          <ListItemButton sx={{ textAlign: "center" }}>
            {item === "/" ? (
              <ListItemText primary="Home" onClick={() => navigate("/")} />
            ) : (
              <ListItemText
                primary={item}
                onClick={() => navigate(`/${item}`)}
              />
            )}
          </ListItemButton>
        </ListItem>
      ))}

      <button
        className="btn btn-warning mx-1 my-2"
        onClick={() => {
          handleDrawerToggle(), navigate("/mycart");
        }}
      >
        <ShoppingCartIcon></ShoppingCartIcon> Cart
        <span className="mx-1 "> ({store.cartData.length})</span>
      </button>

      {store.loginUser ? (
        <LoginMenu handleDrawerToggle={handleDrawerToggle}></LoginMenu>
      ) : (
        <>
          <button
            className="btn btn-dark"
            onClick={() => {
              handleDrawerToggle(), navigate("/login");
            }}
          >
            {" "}
            Login
          </button>
          <button
            className="btn btn-dark mx-1  "
            onClick={() => {
              handleDrawerToggle(), navigate("/signup");
            }}
          >
            {" "}
            New User
          </button>
        </>
      )}
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div className="">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <div className="mobile">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>

              <button
                className="btn btn-warning mx-1 my-2"
                onClick={() => navigate("/mycart")}
              >
                <ShoppingCartIcon></ShoppingCartIcon> Cart
                <span className="mx-1 "> ({store.cartData.length})</span>
              </button>
            </div>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <span
                className="fw-bold fs-3 "
                onClick={() => {
                  navigate("/");
                }}
                style={{ cursor: "pointer" }}
              >
                {" "}
                E-kart <span className="text-warning">Shop</span>
              </span>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => {
                if (item === "/") {
                  return (
                    <Button
                      key={item}
                      sx={{ color: "#fff" }}
                      className="my-2"
                      onClick={() => navigate("/")}
                    >
                      {/* <HomeIcon></HomeIcon> Home */}
                      Home
                    </Button>
                  );
                }
                return (
                  <Button
                    key={item}
                    sx={{ color: "#fff" }}
                    onClick={() => navigate(`/${item}`)}
                  >
                    {item}
                  </Button>
                );
              })}
              <button
                className="btn btn-warning mx-1 my-2"
                onClick={() => navigate("/mycart")}
              >
                <ShoppingCartIcon></ShoppingCartIcon> Cart
                <span className="mx-1 "> ({store.cartData.length})</span>
              </button>
              {store.loginUser ? (
                <LoginMenu></LoginMenu>
              ) : (
                <>
                  <button
                    className="btn btn-dark"
                    onClick={() => navigate("/login")}
                  >
                    {" "}
                    Login
                  </button>
                  <button
                    className="btn btn-dark mx-1  "
                    onClick={() => navigate("/signup")}
                  >
                    {" "}
                    New User
                  </button>
                </>
              )}
            </Box>
          </Toolbar>
        </AppBar>

        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <h1>.</h1>
      </Box>
    </div>
  );
}

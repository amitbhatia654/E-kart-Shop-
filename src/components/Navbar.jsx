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

import { useStore } from "../HelperComponents/StoreProvider";
import LoginMenu from "./LoginMenu";

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

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        E-Kart <span className="text-warning">Shop</span>
      </Typography>
      <Divider />

      {navItems.map((item) => (
        <ListItem key={item} disablePadding>
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

      <LoginMenu></LoginMenu>
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
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <span className="fw-bold fs-3">
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
                My Cart
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
                    className="btn btn-dark"
                    onClick={() => navigate("/signup")}
                  >
                    {" "}
                    Signup
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

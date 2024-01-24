import { React, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import logo from "../Assets/vendde_logo.svg";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import "../Global.css";
import { Link } from "react-router-dom";
import LoginBox from "./LoginBox";

const MyNavlink = styled(Button)({
  backgroundColor: "transparent",
  color: "white",
  padding: "22px 0",
  width: "auto",
  fontSize: "12px",
  fontFamily: "Helvetica-Bold,Helvetica Neue,Helvetica,Arial,sans-serif",
});

function ResponsiveAppBar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleLogin = () => {
    setIsOpen(true);
  };
  const handleClick = () => {
    console.log("success");
    <Link to={"/"} />;
  };
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#030303",
        height: "86px",
        position: "relative",
      }}
    >
      <Container className="container">
        <Toolbar disableGutters className="custom_toolbar">
          <Box
            sx={{
              paddingTop: "0.3125rem",
              paddingBottom: "0.3125rem",
              marginRight: "1rem",
              fontSize: "1.25rem",
              textDecoration: "none",
            }}
          >
            <img
              onClick={handleClick}
              src={logo}
              alt="vendde_logo"
              style={{ width: "71", height: "27", marginLeft: "16px" }}
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              height: "86px",
            }}
          >
            <MyNavlink sx={{ marginLeft: "20px", marginRight: "40px" }}>
              Shop
            </MyNavlink>
            <MyNavlink sx={{ marginRight: "40px" }}>Sell</MyNavlink>
            <MyNavlink sx={{ marginRight: "40px" }}>Borrow</MyNavlink>
            <MyNavlink sx={{ marginRight: "40px" }}>Learn</MyNavlink>
            <MyNavlink sx={{ marginRight: "40px" }}>Protect</MyNavlink>
            <MyNavlink sx={{ marginRight: "10px" }}>Join</MyNavlink>
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              // height: "86px",
              lineHeight: "1.5",
              width: "80px",
              padding: "12px 15px",
            }}
          >
            <Button
              onClick={handleLogin}
              sx={{
                border: "1px",
                backgroundColor: "hsla(0,0%,100%,.05)",
                fontSize: "12px!important",
                borderRadius: "10px",
                color: "white",
                width: "auto",
                fontSize: "12px",
                fontFamily:
                  "Helvetica-Bold,Helvetica Neue,Helvetica,Arial,sans-serif",
              }}
            >
              Login
            </Button>
            <LoginBox isOpen={isOpen} handleClose={() => setIsOpen(false)} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

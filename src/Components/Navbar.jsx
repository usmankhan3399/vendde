import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import logo from "../Assets/vendde_logo.svg";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import Login from "./Login";

const MyNavlink = styled(Button)({
  backgroundColor: "blue",
  color: "white",
  padding: "8px",
  height: "34",
  width: "auto",
  fontSize: "12px",
  fontFamily: "Helvetica-Bold,Helvetica Neue,Helvetica,Arial,sans-serif",
});
function ResponsiveAppBar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#030303",
        height: "86px",
        position: "relative",
        // display: "flex",
        // flexDirection: "row",
      }}
    >
      <Container
      className="container"
        maxWidth="xl"
        sx={{
          // display: "flex",
          //  flexDirection:'column',
          // flexWrap: "inherit",
          alignItems: "center",
          // justifyContent: "space-between",
          width: "100%",
          paddingRight: "1rem",
          paddingLeft: "1rem",
          marginRight: "auto",
          marginLeft: "auto",
          maxWidth: '960px',
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems:'center'
          }}
        >
          <img
            src={logo}
            alt="vendde_logo"
            style={{ width: "71", height: "27", marginLeft: "16px" }}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between"
              // marginBlockStart:'1em',
              // marginBlockEnd:'1em',
            }}
          >
            <MyNavlink>Shop</MyNavlink>
            <MyNavlink>Sell</MyNavlink>
            <MyNavlink>Borrow</MyNavlink>

            <MyNavlink>Learn</MyNavlink>
            <MyNavlink>Protect</MyNavlink>
            <MyNavlink>Join</MyNavlink>
          </Box>

          {/* User Menu (if needed) */}
          <Box sx={{ flexGrow: 0 }}>
            <Login />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

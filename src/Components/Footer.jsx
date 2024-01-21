import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const FooterContainer = styled(Grid)({
  display: "grid",
  gridTemplateColumns: "repeat(3, 33.333%)",
  gridRowGap: "55px",
  paddingBottom: "25px",
  position: "relative",
  backgroundColor: "#f0f0f0",
});

const FooterItem = styled(Paper)({
  textAlign: "center",
  padding: "15px",
  borderTop: "1px solid #ccc",
});

function Footer() {
  return (
    <Box
      sx={{
        marginTop: "0",
        paddingTop: "2rem",
        position: "relative",
        display: " block",
        width: "100%",
        padding: "6rem 0 1rem",
        margin: "0",
        backgroundColor: "#1b1a1d",
      }}
    >
      <Box
        sx={{
          position: "relative",
          margin: "0",
          padding: " 0",
          width: "100%",
          fontFamily:
            " Helvetica-Regular,Helvetica Neue,Helvetica,Arial,sans-serif!important",
          overflowX: "hidden",
          backgroundColor: "#red",
        }}
      >
        <Box 
        sx={{
            width:'100%',
            marginRight:'auto',
            marginLeft:'auto',
            paddingRight: '1rem',
            paddingLeft: '1rem',
            backgroundColor: "#blue"
            }}>
          <Box>
            <FooterContainer component="footer">
              <FooterItem>Footer Item 1</FooterItem>
              <FooterItem>Footer Item 2</FooterItem>
              <FooterItem>Footer Item 3</FooterItem>
              <FooterItem>Footer Item 4</FooterItem>
              <FooterItem>Footer Item 5</FooterItem>
              <FooterItem>Footer Item 6</FooterItem>
            </FooterContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;

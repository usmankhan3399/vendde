import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import backgroundimg from "../Assets/vendde-Background.png";
import { styled } from "@mui/material/styles";
import firststimg from '../Assets/vendde-hero-cars.webp';
import SellingSection from "./SellingSection";
import QualifiedSection from "./QualifiedSection";
import PictureSection from './PictureSection'
import Video from './Video'
import Certified from './Certified'

function LandingPage() {
  const Clicked= () =>{
    alert(" button clicked")
  }
  const MyContainer = styled(Container)({
    alignItems: "center",
    width: "100%",
    height:'100%',
    paddingRight: "1rem",
    paddingLeft: "1rem",
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: "960px",
    "& .Row": {
      display: "flex",
      flex: "1 0 100%",
      flexWrap: " wrap",
      paddingRight: "1.5rem",
      paddingLeft: "1.5rem",
    },

    "& .Heading": {
     
      fontWeight: "700",
      color: "#fff",
      position: "relative",
      visibility: "visible",
      fontFamily: "Helvetica-Bold,Helvetica Neue,Helvetica,Arial,sans-serif",
      display: " block",
    },

    "& .Para": {
      fontSize: "16px",
      fontWeight: "400",
      fontFamily: "Helvetica-Regular,Helvetica Neue,Helvetica,Arial,sans-serif",
      position: "relative",
      lineHeight: "24px",
      display: "block",
      visibility: "visible",  
      textAlign: "center",
      color: "#fff",
    }, 
    "& .Btn": {
      width: "345px",
      height: "60px",
      display: " flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      border: "none",
      textAlign: "center",
      position: "relative",
      fontSize: "16px",
      fontWeight: "700",
      fontFamily:
        "Helvetica-Bold,Helvetica Neue,Helvetica,Arial,sans-serif",
      color: "#fff",
      borderradius: "10px",

    },
  });
  return (
    <Box>
    <Box
      sx={{
        backgroundImage: `url(${backgroundimg})`,
        backgroundSize: "cover",
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <MyContainer
        sx={{
          position: "relative",
          height: "715px",
          padding: "112px 0 0",
        }}
      >
        <Box className="Row"
        >
          <Box>
            <Typography
              variant="h2"
              className="Heading"
              sx={{
                fontSize: "48px",
                width: "min(770px,100%)",
                marginInline: " auto",
                textAlign: "center",
                marginBottom: "65px",
              }}
            >
              Cars are meant to be sold from driveways.
            </Typography>

            <Typography
              variant="p"
              className="Para"
              
            >
              Buy and sell entirely online with the help of a personal
              automotive broker.
            </Typography>
            <Box
              sx={{
                marginTop: "65px",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "15px",
              }}
            >
              <Button className="Btn" onClick={Clicked}
                sx={{
                 
                  background: "linear-gradient(135deg,#9f78f4,#7700ed)",
                }}
              >
                Shop Cars
              </Button>
              <Button onClick={Clicked} className="Btn"
                sx={{
                 
                  background: "#3c3b3f",
                  textDecoration: "none",
                  verticalAlign: "middle",
                  cursor: "pointer",
                }}
              >
                Get Approved
              </Button>
            </Box>
            <Box
              sx={{
                position: "relative",
                top: "50px",
                paddingLeft:'1.5rem',
                paddingRight:'1.5rem',
                textAlign:'center'
              }}
            >
              <img
                src={firststimg}
                style={{ width: "100%", height: "auto" }}
              ></img>
            </Box>
          </Box>
        </Box>
      </MyContainer>

     <SellingSection/>
     <QualifiedSection/>
     <PictureSection/>
        <Video/>
        <Certified/>
      </Box> 
    </Box>
  );
}

export default LandingPage;

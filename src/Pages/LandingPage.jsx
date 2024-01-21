import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import backgroundimg from "../Assets/vendde-Background.png";

function LandingPage() {
  return (
    <Box
      sx={{
        // content:'',
        backgroundImage: `url(${backgroundimg})`,
        backgroundSize: "cover",
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <Container
        className="container"
        sx={{
          position: "relative",
          width: "100%",
          height: "715px",
          maxWidth: '960px',
          display: "block",
          padding: "112px 0 0",
          paddingRight: "1rem",
          paddingLeft: "1rem",
          marginRight: "auto",
          marginLeft: "auto",
        }}
        >
        <Box sx={{
            display: "flex",
            flex: "1 0 100%",
            flexWrap: " wrap",
          // fontFamily: 'Helvetica-Regular,Helvetica Neue,Helvetica,Arial,sans-serif!importan',
          // overflowX: 'hidden',
          // fontSynthesis: 'style',
          // fontStyle: 'normal',
          // textRendering: 'optimizeLegibility'
        }}>
        <Box
          sx={{
          
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: "48px",
              fontWeight: "700",
              fontFamily:
                "Helvetica-Bold,Helvetica Neue,Helvetica,Arial,sans-serif",
              width: "min(770px,100%)",
              marginInline: " auto",
              position: "relative",
              textAlign: "center",
              display: " block",
              color: "#fff",
              marginBottom: "65px",
            }}
          >
            Cars are meant to be sold from driveways.
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              fontFamily:
                " Helvetica-Regular,Helvetica Neue,Helvetica,Arial,sans-serif",
              // justifyContent:'center',
              // alignItems:'center',
              textAlign: "center",
              lineHeight: "24px",
              color: "#fff",
              position: "relative",
              display: "block",
              // marginBlockStart: "1em",
              // marginBlockEnd: "1em",
              
            }}
          >
            Buy and sell entirely online with the help of a personal automotive
            broker.
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
            <Button
              sx={{
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
                background: "linear-gradient(135deg,#9f78f4,#7700ed)",
              }}
            >
              Shop Cars
            </Button>
            <Button sx={{
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
                background: "#3c3b3f",
                textDecoration: 'none',
    verticalAlign: 'middle',
    cursor: 'pointer'
              }}>Get Approved</Button>
          </Box>
        </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default LandingPage;

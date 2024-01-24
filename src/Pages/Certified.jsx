import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import img from "../Assets/vendde-certified.webp";
function Certified() {
  const MyContainer = styled(Container)({
    alignItems: "center",
    width: "100%",
    // height:'100%',
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
    "& .CertifiedMain": {
      display: "flex",
      alignItems: "stretch",
      justifyContent: "stretch",
      paddingRight: "0.25rem!important",
    },
    "& .aaa": {
      position: "relative",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      flexWrap: "wrap",
      backgroundColor: "#1a191d",
      borderRadius: " 30px",
    //   PaddingTop:'90px'
    },
    " & .Right": {
      flex: "0 0 50%",
      maxWidth:  "35%",
      padding: "62px 65px",
    },
    "& .Left": {
      flex: "0 0 50%",
      maxWidth: "50%",
      backgroundColor: "transparent",
      padding: "190px 40px",
      height: "100%",
      overflowX: "hidden",
      overflowY: "hidden",
      borderRadius: "30px",
      position: "relative",
      right: "40px",
    //   paddingRight: "0!important",
    //   paddingLeft: "0!important",
    },

    "& .Heading": {
      fontSize: "36px",
      fontWeight: "700",
      textAlign: "left",
      color: "#fff",
      position: "relative",
      visibility: "visible",
      lineHeight: "36px",
      fontFamily: "Helvetica-Bold,Helvetica Neue,Helvetica,Arial,sans-serif",
      display: " block",
      minHeight: "50px",
      margin: " 0 0 24px",
    },

    "& .Para": {
      fontSize: "16px",
      fontWeight: "400",
      fontFamily: "Helvetica-Regular,Helvetica Neue,Helvetica,Arial,sans-serif",
      textAlign: "left",
      position: "relative",
      lineHeight: "24px",
      color: "grey",
      display: "block",
      visibility: "visible",
    },
    "& .Btn": {
      background: "#9f78f4",
      background: " linear-gradient(135deg,#9f78f4,#7700ed)",
      width: "220px",
      height: "50px",
      textAlign: "center!important",
      fontSize: "14px",
      fontWeight: "400",
      fontFamily: "Helvetica-Bold,Helvetica Neue,Helvetica,Arial,sans-serif",
      color: "#fff",
      padding: "0 15px",
      borderRadius: "10px!important",
      marginTop: "50px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
    },
  });
  return (
    <Box className="QualifiedMainSection">
      <MyContainer>
        <Box
          className="Row"
          sx={{
            justifyContent: "center",
          }}
        >
          <Box
            className="aaa"
            sx={{
              width: "100%",
            }}
          >
            <Box
              className="CertifiedMain"
              sx={{
                width: " 100%!important",
              }}
            >
              <Box className="Right">
                <Typography variant="h4" className="Heading">
                  Vendde Certified
                </Typography>
                <Box
                  sx={{
                    fontWeight: "600",
                  }}
                >
                  <Typography
                    variant="p"
                    className="Para"
                    sx={{
                      marginBottom: "20px",
                    }}
                  >
                    What does peace of mind look like? Buying your next
                    certified car with a no charge 90 day / 3000km powertrain
                    warranty.
                  </Typography>
                  <Typography
                    variant="p"
                    className="Para"
                    sx={{
                      marginBottom: "20px",
                    }}
                  >
                    Every Vendde vehicle passes a 150-point mechanical
                    inspection and is safetied before you take delivery.
                  </Typography>
                  <Typography variant="p" className="Para">
                    Shop with confidence with our Carfax Vehicle History Reports
                    and return your vehicle for a full refund after a 10-Day
                    Test Drive if you end up having second thoughts.
                  </Typography>
                </Box>
                <Button className="Btn">View protection plans</Button>
              </Box>
              <Box className="Left">
                <img
                  src={img}
                  style={{
                    maxWidth: "100%",
                    width: "100%",
                    position: "relative",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </MyContainer>
    </Box>
  );
}

export default Certified;

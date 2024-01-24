import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import React from "react";
import SelectionImg from "../Assets/valuation-dark.webp";
import RightArrow from "../Components/RightArrow";
import img1 from "../Assets/pick-side.webp";
import img2 from "../Assets/buy-sell.webp";
import img3 from "../Assets/delivery-door.webp";

function Video() {
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
    "& .Video": {
        width: "100%",
      height: "205px",
      position: "relative",
    },
    
    "& .Heading": {
      fontSize: "20px",
      fontWeight: "700",
      textAlign: "center",
      color: "#fff",
      position: "relative",
       marginTop:'140px',
      marginBottom: "18px",
      visibility: "visible",
      lineHeight: "1.4em!important",
    },
   
  });
  return (
    <Box className="PictureSection">
      <MyContainer>
        <Box
          className="Row"
          sx={{
            justifyContent: "center",
          }}
        >
          <Box 
            sx={{
              width: "100%",
              backgroundColor:'black'
            }}
          >
            <Box className="Video">
                <Typography variant="h2" className="Heading">Video goes here</Typography>
           
            </Box>
          </Box>
        </Box>
      </MyContainer>
    </Box>
  );
}

export default Video;

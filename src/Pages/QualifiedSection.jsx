import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import React from "react";
import img from "../Assets/new-equifax-v2.svg"

function QualifiedSection() {
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
    "& .QualifiedStretch": {
      display: "flex",
      alignItems: "stretch",
      justifyContent: "stretch",
      paddingRight: "0.25rem!important",
    },
    "& .QualifiedMainContent": {
      position: "relative",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      flexWrap: "wrap",
      backgroundColor: "#1a191d",
      borderRadius: " 30px",
      width: "100%!important",
      " & .Right": {
        flex: "0 0 50%",
        maxWidth: "35%",
        padding: "62px 65px",
      },
      "& .Left": {
        flex: "0 0 43%",
        maxWidth: "50%",
        backgroundColor: "transparent",
        padding: "40px 28px",
        height: "100%",
        overflowX: "hidden",
        overflowY: "hidden",
        borderRadius: "30px",
    },
    "& .Stretch":{
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'stretch'
    },
    "& .Equifax":{
      padding: '75px 90px 60px',
      borderRadius:' 30px 0 0 30px'
    },
    
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
            className="QualifiedStretch"
            sx={{
              width: " 100%!important",
            }}
          >
            <Box className="QualifiedMainContent">
              <Box className="Right">
                <Typography variant="h4" className="Heading">
                  Free Equifax Snapshot
                </Typography>
                <Typography
                  variant="p"
                  className="Para"
                  sx={{
                    color: "#fff !important",
                    fontWeight: "700 !important",
                    marginBottom: "34px !important",
                  }}
                >
                  No impact to your credit score
                </Typography>
                <Box
                  sx={{
                    fontWeight: "600",
                  }}
                >
                  <Typography  variant="p" className="Para" sx={{
                    marginBottom:'20px'
                  }}>
                  Get your estimated purchase finance rate in under 2 minutes by
                  completing a Free Equifax Snapshot, with no impact to your
                  credit score.
                  </Typography>
                  <Typography  variant="p" className="Para">
                  Apply online for your pre-approval and start shopping.
                  </Typography>
                </Box>
                <Button className="Btn">Get your rate</Button>
              </Box>

              <Box className="Left">
                <Box className='Stretch'>
                <Box className="Equifax">
                <img
                  src={img}
                  style={{
                    maxWidth: "100%",
                    width: "100%",
                  }}
                />
                </Box>
              </Box>
              </Box>
              
            </Box>
          </Box>
        </Box>
      </MyContainer>
    </Box>
  );
}

export default QualifiedSection;

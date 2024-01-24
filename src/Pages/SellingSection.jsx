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
import SelectionImg from "../Assets/valuation-dark.webp";
import RightArrow from "../Components/RightArrow";

function SellingSection() {
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
  });
  const MyDiv = styled(Box)({
    // paddingTop:'160px',
    position: "relative",
    display: "block",
    // width: '100%',
    backgroundColor: "transparent",
    padding: "80px 50px ",
    "& h3": {
      fontSize: "36px",
      fontWeight: "700",
      fontFamily: "Helvetica-Bold,Helvetica Neue,Helvetica,Arial,sans-serif",
      color: " #fff",
      position: "relative",
      textAlign: "left",
      display: "block",
      marginBottom: "24px",
      lineHeight:' 1.4em'
    },
    "& p": {
      fontSize: "16px",
      fontWeight: "400",
      fontFamily: "Helvetica-Bold,Helvetica Neue,Helvetica,Arial,sans-serif",
      color: " #fff",
      position: "relative",
      textAlign: "left",
      display: "block",
    },
    "&  .body1": {
      color: "grey",
    },
    "& .li_single":{
      position: "relative",
      paddingLeft: "35px",
      marginBottom: "17px",
    },
  "& .li_double":{
    position: 'relative',
    paddingLeft: '35px',
  },
  "& .li_btn":{
    width: '200px',
    height:' 50px',
    fontSize: '12px',
    // fontWeight: '700',
    fontFamily:' Helvetica-Bold,Helvetica Neue,Helvetica,Arial,sans-serif',
    textAlign: 'center',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap:' wrap',
    color: '#fff',
    backgroundColor: '#3c3b3f',
    borderRadius: '10px',
    marginTop: '40px',
    border: '1px solid transparent',
    padding: '0.375rem 0.75rem',
    textDecoration:' none',
    verticalAlign: 'middle',
    cursor: 'pointer'
  },
});
  const ImgDiv = styled(Box)({
    position: "relative",
    top: "22px",
    textAlign: "center",
  });
  return (
    <Box className="MainSection">
      <MyContainer >
        <Box
          className="Row"
          sx={{
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "91%",
            }}
          >
            <Box className="Sectiongrid">
              <MyDiv>
                <h3>Selling your vehicle?</h3>
                <p>Choose your path…</p>
                <List className="listclass">
                  <ListItem className="li_single">
                    <ListItemIcon className="li_icon">
                      <RightArrow />
                    </ListItemIcon>
                    <Typography
                      variant="body1"
                      className="body1"
                    >
                      Sell your vehicle directly to Vendde.
                    </Typography>
                  </ListItem>
                  <ListItem className="li_single">
                    <ListItemIcon className="li_icon">
                      <RightArrow />
                    </ListItemIcon>
                    <Typography
                      variant="body1"
                      className="body1"
                    >
                      Trade for something in the marketplace.
                    </Typography>
                  </ListItem>
                  <ListItem className="li_double">
                    <ListItemIcon className="li_icon">
                      <RightArrow />
                    </ListItemIcon>
                    <Typography
                      variant="body1"
                      className="body1"
                    >
                      Add to the marketplace for maximum value.
                    </Typography>
                  </ListItem>
                </List>
                <Button className="li_btn">Get your value</Button>
              </MyDiv>
              <ImgDiv>
                <img
                  src={SelectionImg}
                  style={{ maxWidth: "100%", height: "auto" }}
                ></img>
              </ImgDiv>
            </Box>
          </Box>
        </Box>
      </MyContainer>
    </Box>
  );
}

export default SellingSection;

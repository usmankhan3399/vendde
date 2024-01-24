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

function PictureSection() {
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
    "& .PictureGrid": {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridGap: "70px",
    },
    "& .Card": {
      display: "block",
      position: "relative",
      padding: "16px",
      borderRadius: " 4px",
      background: "#fff",
      color: "rgba(0,0,0,.87)",
      backgroundColor: "transparent!important",
      boxShadow: "none!important",
      border: "none!important",
      padding: "0!important",
    },
    "& .CardMedia": {
      width: "100%",
      height: "205px",
      borderRadius: "30px!important",
      position: "relative",
      display: "block",
      margin: "0!important",
    },
    "& .CardBody": {
      padding: "32px 5px",
      display: "block",
      marginBottom: "16px",
      fontSize: "14px",
    },
    "& .Heading": {
      fontSize: "20px",
      fontWeight: "700",
      textAlign: "left",
      color: "#fff",
      position: "relative",
      marginBottom: "18px",
      visibility: "visible",
      lineHeight: "1.4em!important",
    },
    "& .para": {
      fontSize: "16px",
      fontWeight: "400",
      fontFamily: "Helvetica-Regular,Helvetica Neue,Helvetica,Arial,sans-serif",
      textAlign: "left",
      position: "relative",
      lineHeight: "24px",
      color: "grey",
      display: "block",
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
            }}
          >
            <Box className="PictureGrid">
              <Card className="Card">
                <CardMedia
                  className="CardMedia"
                  component="img"
                  alt="Image Alt Text"
                  image={img1}
                />
                <CardContent className="CardBody">
                  <Typography variant="h5" className="Heading">
                    Pick your sidekick
                  </Typography>
                  <Typography variant="p" className="para">
                    Did we just become best friends? Match with a like-minded
                    Venddor to create your customized experience, specific to
                    your lifestyle needs.
                  </Typography>
                </CardContent>
              </Card>
              <Card className="Card">
                <CardMedia
                  className="CardMedia"
                  component="img"
                  alt="Image Alt Text"
                  image={img2}
                />
                <CardContent className="CardBody">
                  <Typography variant="h5" className="Heading">
                    Buy. Sell. Trade. Consign.
                  </Typography>
                  <Typography variant="p" className="para">
                    Capture your vehicle in minutes right from your driveway to
                    get an instant value. Then choose your preferred sales
                    method in a safe and secure way to transact in under an
                    hour.
                  </Typography>
                </CardContent>
              </Card>
              <Card className="Card">
                <CardMedia
                  className="CardMedia"
                  component="img"
                  alt="Image Alt Text"
                  image={img3}
                />
                <CardContent className="CardBody">
                  <Typography variant="h5" className="Heading">
                    Delivered to your door
                  </Typography>
                  <Typography variant="p" className="para">
                    Convenience is king and we are committed to our promises.
                    Take delivery on your time, right at your front door, with
                    quality assurance peace of mind backed by a 10-Day Return
                    Policy.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </MyContainer>
    </Box>
  );
}

export default PictureSection;

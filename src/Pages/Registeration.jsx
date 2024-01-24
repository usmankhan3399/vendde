import { useFormik } from "formik";
import { styled } from "@mui/material/styles";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Divider,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";
import LoginBox from "../Components/LoginBox";
import { useState } from "react";

const Registeration = ({ isOpen, handleClose }) => {
  const [Open, setIsOpen] = useState(false);
  const handleLogin = () => {
    setIsOpen(true);
  };
  const Mybutton = styled(Button)({
    background: " linear-gradient(135deg,#9f78f4,#7700ed)",
    border: "none",
    padding: "23px 65px",
    fontSize: "14px",
    display: "block",
    borderRadius: "10px",
    fontWeight: "600",
    lineHeight: "1",
    color: "#fff",
    textAlign: "center",
    marginTop: "2rem",
  });

  const MyTextField = styled(TextField)({
    backgroundColor: "#111014",
    borderColor: "#383838",
    borderBottom: "1px solid #38383",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "lighter",
    fontFamily: "Helvetica-Light,Helvetica Neue,Helvetica,Arial,sans-serif",
    borderRadius: "10px",
  });

  const MyLabel = styled(Typography)({
    fontsize: "14px",
    fontWeight: "400",
    fontFamily: "Helvetica-Light,Helvetica Neue,Helvetica,Arial,sans-serif",
    textAlign: "left",
    color: "#fff",
    marginTop: "1rem",

    marginBottom: "1px",
    display: "block",
  });
  const CheckboxDiv = styled(Box)({
    display: "flex",
    flexDirection: "row",
    paddingTop: "10px",

    "& .t&c": {
      backgroundColor: "transparent",
      borderColor: "grey",
      width: "24px",
      height: "24px",
      borderRadius: "3px",
    },
    "& label": {
      color: "#fff",
      fontSize: "11px",
      fontWeight: "lighter",
      fontFamily: "Helvetica-Light,Helvetica Neue,Helvetica,Arial,sans-serif",
      textAlign: "left",
      position: "relative",
      paddingTop: "9px",
      paddingLeft: "8px",
      lineHeight: "14px",
      display: "inline-block",
      lineHeight: "14px",
    },
  });
  const formik = useFormik({
    initialValues: {
      emailOrPhone: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: () => alert("Registration Successfull"),
  });
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle
        sx={{
          textAlign: "center",
          // marginTop: "0.5rem",
          padding: "16px 20px",
          position: "relative",
          backgroundColor: "#424242",
          color: "#fff",
          justifyContent: "center",
          borderTopLeftRadius: "0.3rem",
          borderTopRightRadius: "0.3rem",
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
          sx={{
            position: "absolute",
            left: "10px",
            top: "10px",
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h4">Create an Account</Typography>
      </DialogTitle>
      <DialogContent
        style={{
          width: "424px",
          padding: "3rem 2rem",
          backgroundColor: "rgb(0 0 0 / 87%)",
          justifyContent: "center",
          borderBottomLeftRadius: "0.3rem",
          borderBottomRightRadius: "0.3rem",
        }}
      >
        <form className="loginform" onSubmit={formik.handleSubmit}>
          <MyLabel>First Name</MyLabel>
          <MyTextField
            fullWidth
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            value={formik.values.firstName}
          />
          <MyLabel>Last Name</MyLabel>
          <MyTextField
            fullWidth
            id="lastName"
            name="lastName"
            type="text"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />

          <MyLabel>Phone Number</MyLabel>
          <MyTextField
            fullWidth
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            placeholder="+1 (000) 000-0000"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          />
          <MyLabel>Email or Phone Number</MyLabel>
          <MyTextField
            fullWidth
            id="emailOrPhone"
            name="emailOrPhone"
            type="text"
            onChange={formik.handleChange}
            error={
              formik.touched.emailOrPhone && Boolean(formik.errors.emailOrPhone)
            }
            helperText={
              formik.touched.emailOrPhone && formik.errors.emailOrPhone
            }
            value={formik.values.emailOrPhone}
          />
          <MyLabel>Password</MyLabel>
          <MyTextField
            fullWidth
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}

            // margin="normal"
          />
          <Box
            sx={{
              marginTop: "20px",
            }}
          >
            <CheckboxDiv>
              <Checkbox
                id="t&c"
                name="t&c"
                className=""
                checked={formik.values.rememberMe}
                onChange={formik.handleChange}
              />
              <label>
                By creating a Vendde Account, I understand and agree to Vendde's{" "}
                <a
                  href={() => alert("Terms and conditions applied")}
                  style={{
                    color: "white",
                    position: "relative",
                    textDecoration: "underline",
                  }}
                >
                  Terms and Conditions
                </a>
              </label>
            </CheckboxDiv>
            <CheckboxDiv>
              <Checkbox
                id="t&c"
                name="t&c"
                className=""
                checked={formik.values.rememberMe}
                onChange={formik.handleChange}
              />
              <label>
                By providing your number you consent to receive
                marketing/promotional/notification messages from Vendde, to
                opt-out you can reply STOP at any time{" "}
              </label>
            </CheckboxDiv>
            <CheckboxDiv>
              <Checkbox
                id="t&c"
                name="t&c"
                className=""
                checked={formik.values.rememberMe}
                onChange={formik.handleChange}
              />
              <label>
                Send me email updates from Vendde, including marketing,
                promotions, and notifications{" "}
              </label>
            </CheckboxDiv>
          </Box>
          <Box
            sx={{
              width: "304px",
              height: "78px",
              backgroundColor: "lightgrey",
              alignItems:'center',
              marginLeft:"50px",
              justifyContent:"center"
            }}
          >
            <h4>Captcha goes here</h4>
          </Box>
          <Mybutton type="submit" variant="contained" color="primary" fullWidth >
            Register
          </Mybutton>

          <div style={{ textAlign: "center" }}>
            <p style={{color:"white"}}>Already registered? Login Instead</p>
            <Mybutton variant="Contained" 
            color="secondary"
             fullWidth
             onClick={handleLogin}
            sx={{
              background: 'hsla(0,0%,100%,.05)!important',
            }}>
              Login
            </Mybutton>
            <LoginBox isOpen={Open} handleClose={() => setIsOpen(false)} />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Registeration;

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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";
import Registeration from "../Pages/Registeration";
import { useState } from "react";



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
  margin: "1rem auto",
});

const MyTextField = styled(TextField)({
  backgroundColor: "#111014",
  borderColor: "#383838",
  borderBottom: "1px solid #38383",
  color: "#fff",
  fontSize: "14px",
  fontWeight: "lighter",
  fontFamily: "Helvetica-Light,Helvetica Neue,Helvetica,Arial,sans-serif",
  // padding:'10px 18px',
  // height:'auto',
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




const LoginBox = ({ isOpen, handleClose }) => {
 
  const [isRegister, setIsRegister] = useState(false);
  const handleRegistration = () => {
    setIsRegister(true);
  };
  const formik = useFormik({
    initialValues: {
      emailOrPhone: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: () => alert("Login Successfull"),
  });
  
  return (
    <Dialog open={isOpen} onClose={handleClose} sx={{
      '& .MuiPaper-root': {
        borderRadius: '1rem'
      }
    }}>
      <DialogTitle
        sx={{
          textAlign: "center",
          padding: "16px 20px",
          position: "relative",
          backgroundColor: "#424242",
          color: "#fff",
          justifyContent: "center",
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
        <Typography variant="h4">Login</Typography>
      </DialogTitle>
      <DialogContent
        style={{
          width: "424px",
          padding: "3rem 2rem",
          fontFamily: "",
          backgroundColor: "rgb(0 0 0 / 87%)",
          justifyContent: "center",
          borderBottomLeftRadius: "0.3rem",
          borderBottomRightRadius: "0.3rem",
        }}
      >
        <form className="loginform" onSubmit={formik.handleSubmit}>
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
          <FormControlLabel
            control={
              <Checkbox
                id="rememberMe"
                name="rememberMe"
                checked={formik.values.rememberMe}
                onChange={formik.handleChange}
              />
            }
            label="Remember me"
            sx={{
              color: "#fff",
              fontSize: "12px",
              fontWeight: "lighter",
              fontFamily:
                "Helvetica-Light,Helvetica Neue,Helvetica,Arial,sans-serif",
              textAlign: "center",
              position: "relative",
              left: "0",
              paddingLeft: "8px",
              lineHeight: "14px",
              display: "inline-block",
              margin: "1rem auto",
            }}
          />

          <Mybutton type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Mybutton>

          <Link
            href="#"
            variant="body2"
            style={{
              marginTop: "10px",
              color: "#fff",
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Forgot password?
          </Link>

          <Divider
            style={{
              position: "relative",
              backgroundColor: "#525252",
              width: "100%",
              height: "1px",
              verticalAlign: "baseline",
              margin: "40px auto",
              display: "block",
            }}
          />

          <div style={{ textAlign: "center" }}>
            <p>Not yet registered?</p>
            <Mybutton  onClick={handleRegistration}fullWidth>
              Register
            </Mybutton>
            <Registeration isOpen={isRegister} handleClose={() => setIsRegister(false)}/>
          </div>
        </form>
        {/* </LoginWrapper> */}
      </DialogContent>
    </Dialog>
  );
};

export default LoginBox;

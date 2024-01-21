
import { useFormik } from "formik";
import { styled } from "@mui/material/styles";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Divider,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const LoginBox = ({ isOpen, handleClose }) => {
  // const LoginWrapper = styled(Box)({
  //   backgroundColor: "rgb(0 0 0 / 87%)",
  //   borderRadius: "10px",
  //   padding: "30px",
  //   color: "white",
  //   display: "flex",
  //   justifyContent: "center",
  //   "& p": {
  //     marginBottom: "10px",
  //   },
  // });

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
  const formik = useFormik({
    initialValues: {
      emailOrPhone: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: () => alert("Login Successfull"),
  });
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle
        sx={{
          textAlign: "center",
          marginTop: "0.5rem",
          padding: "16px 20px",
          position: "relative",
          backgroundColor: "#424242",
          color: "#fff",
          // height: "auto",
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
        <Typography variant="h4">Login</Typography>
      </DialogTitle>
      <DialogContent
        style={{
          width: "424px",
          // height: "auto",
          // paddingBottom:'3rem',
          //  paddingTop:'6rem',
          // marginTop:'3rem',
          padding:'3rem 2rem',
          // boxSizing: "border-box",
          // boxShadow:'none',
          fontFamily: "",
          backgroundColor: "rgb(0 0 0 / 87%)",
          // display: "flex",
          // flexDirection: "column",
          // alignItems: "center",
          justifyContent: "center",
          // border: "1px solid rgba(0,0,0,.2)",
          borderBottomLeftRadius: "0.3rem",
          borderBottomRightRadius: "0.3rem",
          // overflowY: "hidden",
        }}
      >
        {/* <LoginWrapper> */}
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
                // sx={{
                //   position: "relative",
                //   marginLeft: "0",
                //   width: "20px",
                //   height: "20px",
                //   backgroundColor: "transparent",
                //   border: "1px solid grey",
                //   float: "left",
                // }}
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
              // marginRight:'0',
              // top: "1.5rem",
              left: "0",
              paddingLeft: "8px",
              lineHeight: "14px",
              display: "inline-block",
              // display: "flex",
              // justifyContent:'end',
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
            <Mybutton variant="Contained" color="secondary" fullWidth>
              Register
            </Mybutton>
          </div>
        </form>
        {/* </LoginWrapper> */}
      </DialogContent>
    </Dialog>
  );
};

export default LoginBox;

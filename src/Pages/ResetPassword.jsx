import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button, Link, Typography, Container, Grid, Paper } from '@mui/material';

const ResetPassword = ({ onBackToSignIn }) => {
  
    const formik = useFormik({
        initialValues: {
          emailOrPhone: '',
          captcha: '',
        },
        onSubmit: values => {
          // Handle forgot password logic here
          console.log('Form values:', values);
        },
      });
    
      return (
        <Container component="main" maxWidth="xs">
          <Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h5" gutterBottom>
              Forgot Password
            </Typography>
    
            <Typography variant="body1" paragraph>
              Please enter your email or phone number to reset your password.
            </Typography>
    
            <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
              <TextField
                fullWidth
                id="emailOrPhone"
                name="emailOrPhone"
                label="Email or Phone Number"
                value={formik.values.emailOrPhone}
                onChange={formik.handleChange}
                error={formik.touched.emailOrPhone && Boolean(formik.errors.emailOrPhone)}
                helperText={formik.touched.emailOrPhone && formik.errors.emailOrPhone}
                margin="normal"
              />
    
              {/* Your captcha component goes here */}
              <div style={{ margin: '20px 0' }}>
                {/* Replace this with your captcha component */}
                <p>I'm not a robot</p>
                {/* Replace this with your captcha component */}
              </div>
    
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Send Password Reset
              </Button>
            </form>
    
            <Grid container justifyContent="flex-end" style={{ marginTop: '10px' }}>
              <Grid item>
                <Link href="#" onClick={onBackToSignIn} variant="body2">
                  Back to Sign In
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      );
    };

export default ResetPassword;

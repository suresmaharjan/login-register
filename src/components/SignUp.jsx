import React from 'react'
import {useState} from "react";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Link} from "react-router-dom";
import Footer from "./Footer";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
const initVal={
    fullname:'',
    email:'',
    password:''
}

export default function SignUp() {
  const [val , setVal]=useState(initVal); 
  const  handleChange = e =>{
     const {name , value}=e.target
      setVal({...val , [name]:value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://61e15f2b63f8fc0017618b84.mockapi.io/users" ,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:val.fullname,
        email:val.email,
        password:val.password
      })
    })
    .then(() => alert("You have Signup , successfully"));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {/* <Box component="form" noValidate   sx={{ mt: 3 }}> */}
          <ValidatorForm
                onSubmit={handleSubmit}
                // onError={errors => console.log(errors)}
            >
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextValidator
                    label="Fullname"
                    onChange={handleChange}
                    fullWidth
                    name="fullname"
                    validators={['required']}
                    errorMessages={['this field is required']}
                    value={val.fullname}
                />
              </Grid>
            
              <Grid item xs={12}>
                <TextValidator
                    label="Email"
                    onChange={handleChange}
                    fullWidth
                    name="email"
                    type="email"
                    validators={['required']}
                    errorMessages={['this field is required']}
                    value={val.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextValidator
                    label="Password"
                    onChange={handleChange}
                    fullWidth
                    name="password"
                    type="password"
                    validators={['required']}
                    errorMessages={['this field is required']}
                    value={val.password}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link  to="/signin">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
            </ValidatorForm>
          {/* </Box> */}
        </Box>
        <Footer sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

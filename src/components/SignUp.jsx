import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import {
  Avatar,
  TextField,
  Button, Typography, Grid, Box, Container
} from "@mui/material";

import {
  ValidatorForm,
  TextValidator
}
  from 'react-material-ui-form-validator';


export default function SignUp() {

  const initVal = {
    fullname: "",
    email: "",
    password: ""
  }

  const [val, setVal] = useState(initVal);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setVal({ ...val, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://61f6747a2e1d7e0017fd6db9.mockapi.io/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "email": val.email,
        "password": val.password
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mb:2}}>
          Sign up
        </Typography>
        <ValidatorForm onSubmit={handleSubmit} style={{width:"100%"}}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
            <TextValidator

                label="Fullname"
                fullWidth
                type="text"
                name="fullname"
                value={val.fullname}
                onChange={handleChange}
                validators={['required']}
                errorMessages={['this field is required']}
              />
            </Grid>

            <Grid item xs={12}>
              <TextValidator
                label="Email"
                fullWidth
                type="email"
                name="email"
                value={val.email}
                onChange={handleChange}
                validators={['required', 'isEmail']}
                errorMessages={['this field is required']}
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                label="Password"
                fullWidth
                type="password"
                name="password"
                value={val.password}
                onChange={handleChange}
                validators={['required']}
                errorMessages={['this field is required']}
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
              <Link to="/signin">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </ValidatorForm>
      </Box>
      <Footer sx={{ mt: 5 }} />
    </Container>
  );
}

import { useState } from 'react'
import FeedbackModal from "./Modal"
import Footer from './Footer';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {
  ValidatorForm,
  TextValidator
}
  from 'react-material-ui-form-validator';


export default function SignIn() {
  const [credential, setCredential] = useState({ email: "", password: "" })
  const [displayModal , setDisplay] = useState(false)
  const [feed , setFeed]=useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setCredential({ ...credential, [name]: value })
  }

  const handleClick=()=>{
    setDisplay(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://61f6747a2e1d7e0017fd6db9.mockapi.io/users")
      .then(res => res.json())
      .then(data => {
          const user=data.find(({email,password})=>{
            return  email == credential.email && password === credential.password
          })
          user ? setFeed("Logged in Successfully"):setFeed("Try Again Later")
          setDisplay(true);
      })
  }

  return (
    <>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <ValidatorForm  noValidate  onSubmit={handleSubmit} style={{width:"100%"}} >
              <TextValidator
                margin="normal"
                autoComplete="off"
                required
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={credential.email}
                onChange={handleChange}
                validators={['required']}
                errorMessages={['this field is required']}
              />
              <TextValidator
                margin="normal"
                autoComplete="off"
                required
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={credential.password}
                onChange={handleChange}
                validators={['required']}
                errorMessages={['this field is required']}
              />

              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Link>
                    Forgot password?
                  </Link> */}
                </Grid>
                <Grid item>
                  <Link to="/signup">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Footer sx={{ mt: 5 }} />
            </ValidatorForm>
          </Box>
        </Grid>
      </Grid>
      { displayModal ?  <FeedbackModal children={feed} handleClick={handleClick} /> : "" }
    </>
  );
}

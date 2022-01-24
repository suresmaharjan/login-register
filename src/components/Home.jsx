import  React from 'react';
import {Grid , Typography} from '@mui/material';
import Footer from "./Footer";
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();
const Home = () => {
    const test={
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textTransform:"uppercase",
        fontSize:100
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" >
                {/* <CssBaseline /> */}
                <Grid
                    item
                    xs={12}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    styles={{test}}
                >
                 <Typography component="h1">Welcome To The Home Page</Typography>
                    {/* <Footer sx={{ mt: 5 }} /> */}
            </Grid>
        </Grid>
     
      </ThemeProvider >
    )
}

export default Home;


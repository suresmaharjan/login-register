import React from 'react'
import Typography from '@mui/material/Typography';


const Footer = (props) => {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        {/* <Link color="inherit" >
          Your Website
        </Link> */}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  export default Footer;
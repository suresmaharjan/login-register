import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/">Home</Link>
          <div>
            <Link to="/login"> Login</Link>
            <Link to="/register"> Register</Link>

          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

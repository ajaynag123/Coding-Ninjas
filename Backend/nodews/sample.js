import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";

const Header = ({ children, hasHiddenAuthButtons }) => { 
  const history = useHistory();
    if(window.location.pathname === '/'){ 
      window.localStorage.getItem('token') ?  (
        <Box className="header">
            <Box className="header-title">
                <img src="logo_light.svg" alt="QKart-icon"></img>
            </Box>
            <Stack direction='row' spacing={2}>
            <Button>LOGIN</Button>
            <Button variant='contained'>REGISTER</Button>
            </Stack>
        </Box>
      )
       :  (
          <Box className="header">
            <Box className="header-title">
                <img src="logo_light.svg" alt="QKart-icon"></img>
            </Box>
            
            <img src="avatar.png" alt="User avatar">Text</img>

            <Button variant='text'>testuser</Button>
            <Button>LOGOUT</Button>
          </Box>
        )

      } else {
        return (
          <Box className="header">
            <Box className="header-title">
                <img src="logo_light.svg" alt="QKart-icon"></img>
            </Box>
            <Button
              className="explore-button"
              startIcon={<ArrowBackIcon />}
              variant="text"
              onClick={() => history.push('/')}
            >
              Back to explore
            </Button>
          </Box> 
        )
      }
    }

export default Header;

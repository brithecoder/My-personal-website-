import React,{useState} from "react";
import { NavLink, useHistory } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Hamburger from 'hamburger-react';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';





function HamburgerMenu(){

    const [isOpen, setOpen] = useState(false)

 return(
       
  <Container className="hamburgerMenu">
 <Hamburger toggled={isOpen} toggle={setOpen} direction="right"    />
  </Container>
  

    )
}
export default HamburgerMenu;
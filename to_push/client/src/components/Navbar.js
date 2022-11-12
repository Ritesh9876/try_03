import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "../redux/login/loginAction";
import {useNavigate} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar  from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Navbarr(props) {
    const handlelogOut = () =>{
        props.logout()
       // navigate("/login")
        }
        const navigate=useNavigate()
  return (
    <div>sdf</div>
  //   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  //   <Container>
  //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  //     <Navbar.Collapse id="responsive-navbar-nav">
  //       <Nav className="me-auto">
  //         <Nav.Link href="#features">Features</Nav.Link>
  //         <Nav.Link href="#pricing">Pricing</Nav.Link>
  //         <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
  //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
  //           <NavDropdown.Item href="#action/3.2">
  //             Another action
  //           </NavDropdown.Item>
  //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
  //           <NavDropdown.Divider />
  //           <NavDropdown.Item href="#action/3.4">
  //             Separated link
  //           </NavDropdown.Item>
  //         </NavDropdown>
  //       </Nav>
  //       <Nav>
  //         <Nav.Link href="#deets">More deets</Nav.Link>
  //         <Nav.Link eventKey={2} href="#memes">
  //           Dank memes
  //         </Nav.Link>
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Container>
  // </Navbar>
  );
}

//export default Navbar
const mapStateToProps = (state) => {
  //
  return {
    loggedIn: state.loginReducer.loggedIn,
    error: state.loginReducer.error,
  };
};
const mapDispatchToProps = dispatch => {
  return {
     logout: () => dispatch(action.logout()),
  };
};
export default connect(
  mapStateToProps,
   mapDispatchToProps
)(Navbarr);

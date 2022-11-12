import React from "react";
import Navbarr from './Navbar'
import './styles/home.css'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "../redux/login/loginAction";

import { Grid, Typography } from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
import AssessmentIcon from "@material-ui/icons/Assessment";
import TouchAppIcon from "@material-ui/icons/TouchApp";

const Home = (props) => {
    const handlelogOut = () =>{
        props.logout()
       // navigate("/login")
        }
    return (
      <>
        <div 
        className="content"
        > <header className="header">
        {/* <nav className="navbar"> */}
        <ul className="main-nav">
        <Link className="hometitle" to="/">
            <li>Histosite</li>
          </Link>
          {props.loggedIn && (
          <Link to="/add_data">
            <li>contribute</li>
          </Link>
          )}
           {props.loggedIn && (
          <Link to="/webexample">
            <li>API application</li>
          </Link>
          )}
          {!props.loggedIn && (
            <Link to="/signup">
              <li className="bt" >signup</li>
            </Link>
          )}
          {!props.loggedIn && (
            <Link to="/login">
              <li className="bt" >login</li>
            </Link>
            
          )}
          {props.loggedIn && (
            <Link >
            <li className="bt" style={{"marginRight":"0px"}} onClick={handlelogOut}>logout</li>
            </Link>
          )}
          </ul>
        {/* </nav> */}
    </header>
        {/* <Navbarr /> */}
        <div className="title">
            <div className="title-design">
                <h1><b> Discover the history that shaped us </b></h1>
            </div>
            <div className="tag-line tag-line-design">
                <h3>Soulful experience with landmarks that have withstood the test of time. We walk the talk.</h3>
            </div>
            
        </div>
        </div>
        <div style={{ overflow: "hidden", backgroundColor: "#f3f5f8" }}>
      <div style={{ marginTop: 20 }} data-aos={"fade-left"}>
        <div style={{ textAlign: "center", marginBottom: 25 }}>
          <div>
            <Typography
              display="block"
              style={{
                fontSize: "2.25em",
                fontFamily: "Courgette",
                padding: "0.5em",
              }}
            >
              <strong>Our Solution</strong>
            </Typography>
            <hr
              style={{
                width: "75px",
                textAlign: "center",
                height: "3px",
                background: "#2E86AB",
                padding: 0,
                marginTop: 0,
                margin:"auto",
              }}
            />
          </div>
        </div>
        <Grid
          container
          justifyContent="space-evenly"
      
          style={{ textAlign: "center" }}
          // spacing={6}
        >
          <Grid item>
            {/* <DescriptionIcon fontSize="large" style={{ color: "#2E86AB" }} /> */}
            <br />
            <Typography variant="body1" style={{ marginTop: 15 }}>
              <strong>DOCUMENTATION</strong>
            </Typography>
            <div
              style={{
                maxWidth: 300,
                textAlign: "center",
                marginTop: "1em",
                fontSize: "1.5em",
              }}
            >
              Real time input, tracking, and monitoring on all levels. Result
              oriented input is the solution that we are offering.
            </div>
            <br />
          </Grid>
          <Grid item>
            {/* <AssessmentIcon fontSize="large" style={{ color: "#2E86AB" }} /> */}
            <br />
            <Typography variant="body1" style={{ marginTop: 15 }}>
              <strong>APPLICATION</strong>
            </Typography>
            <div
              style={{
                maxWidth: 300,
                textAlign: "center",
                marginTop: "1em",
                fontSize: "1.5em",
              }}
            >
              Built applications using our api to access vast amount of information about historical sites.

            </div>
            <br />
          </Grid>
          <Grid item>
            {/* <TouchAppIcon fontSize="large" style={{ color: "#2E86AB" }} /> */}
            <br />
            <Typography variant="body1" style={{ marginTop: 15 }}>
              <strong>CONTRIBUTE/</strong>
            </Typography>
            <div
              style={{
                maxWidth: 300,
                textAlign: "center",
                marginTop: "1em",
                fontSize: "1.5em",
              }}
            >
              We are open for your contribution for providing better solutions to historical sites preservation and spread awearness among people.
            </div>
            <br />
          </Grid>
        </Grid>
      </div>
    </div>
        </>
    )
};
//export default Home;
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
  )(Home);
import React, {useState,useEffect} from 'react'
import {Navigate} from 'react-router-dom'
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Link,
    Grid,
    Box,
    Typography,
    Container,
    withStyles,
} from "@material-ui/core";
import axios from 'axios'
//import * as action from "../redux/register/registerAction";
//import { connect } from "react-redux";
function SignUp()
{
    const [login,setLogin]=useState(false)
    const [username,setUsername]=useState("")
    const [first_name,setFirstName]=useState("")
    const [last_name,setLastName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [cpassword,setCpassword]=useState("")
    const [error,setError]=useState(false)
    const [registerd,setResgistered]=useState(false)
    // first_name,last_name,email
    const  handleUsernameChange = e => {
        // this.setState({
        //   username: e.target.value,
        // });
        setUsername(e.target.value)
      };
      const  handlefirstnameChange = e => {
        // this.setState({
        //   username: e.target.value,
        // });
        setFirstName(e.target.value)
      };
      const  handlelastNameChange = e => {
        // this.setState({
        //   username: e.target.value,
        // });
        setLastName(e.target.value)
      };
      const  handleEmailChange = e => {
        // this.setState({
        //   username: e.target.value,
        // });
        setEmail(e.target.value)
      };
    
     const handlePasswordChange = e => {
        // this.setState({
        //   password: e.target.value,
        // });
        setPassword(e.target.value)
      };
    
     const handleForgotPassword = e => {
        e.preventDefault();
        alert("Work in Progress...");
      };
      const handlecPasswordChange = e => {
        // this.setState({
        //   password: e.target.value,
        // });
        setCpassword(e.target.value)
      };
     const handleSubmit = async  e => {
        
        e.preventDefault();
     if(password != cpassword) {
        alert("check please pass again");
        return;
     }//http://localhost:5000/api/register
     console.log(username,last_name,first_name)
        
          try{
            const res = await axios.post(
              `http://192.168.137.185:8000/`,
          
                    {
                  password,username,first_name,last_name,email
              }
            );
            console.log(res)
          }
          catch(err){
            console.log(err)
          }
          
        // const ai=axios.create({
        //   baseURL: "http://192.168.137.185:8000/",
        //   headers:{
        //     "Content-Type":"application/json",
        //     accept:"application/json",
           
        //   }
          
        // })
        //   const response = fetch("http://192.168.137.185:8000/", {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         password,username,first_name,last_name,email
        //     }),
        //     headers: {
        //      /// 'X-Api-Key': API_KEY,
        //       'Content-Type': 'application/json',
        //       "Access-Control-Allow-Origin": "*",
        //       // Other possible headers
        //     }
        //   });
          
        //fetch('http://192.168.137.185:8000/', {mode:'cors'})
      };
      
      return (
        <div  style={{ "marginTop":"20vh"}}>
          {/* {
            this.props.loggedIn === true && <Navigate to="/dashboard" />}
         */}
          
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div >
              <Avatar style={{"margin":"auto"}} >
                {/* <LockOutlinedIcon /> */}
              </Avatar>
              <Typography
              style={{"margin":"auto","textAlign":"center"}}
               component="h1" variant="h5">
                Sign up
              </Typography>
              <form  noValidate>
              <TextField
                  value={first_name}
                  onChange={handlefirstnameChange}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="firstname"
                  label="firstname"
                  name="tel"
                  autoComplete="tel"
                  autoFocus
                />
                   <TextField
                  value={last_name}
                  onChange={handlelastNameChange}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="last_name"
                  label="lastName"
                  name="tel"
                  autoComplete="tel"
                  autoFocus
                />
                   <TextField
                  value={email}
                  onChange={handleEmailChange}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="email"
                  name="tel"
                  autoComplete="tel"
                  autoFocus
                />
                <TextField
                  value={username}
                  onChange={handleUsernameChange}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="UserName"
                  name="tel"
                  autoComplete="tel"
                  autoFocus
                />
                <TextField
                  value={password}
                  onChange={handlePasswordChange}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                    <TextField
                  value={cpassword}
                  onChange={handlecPasswordChange}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="cpassword"
                  label="cPassword"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                 // className={classes.submit}
                >
                  Sign In
                </Button>
                
              </form>
            </div>
            <Box mt={8}></Box>
          </Container>
        </div>
      ) 
    }
export default  SignUp;
// const mapStateToProps = state => {
//   //
//   return {
//     loggedIn: state.loginReducer.loggedIn,
//     error: state.loginReducer.error,
//     notifications: state.notifications,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//      login: () => dispatch(action.login()),
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SignUp);
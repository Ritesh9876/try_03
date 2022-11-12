import React, {useState,useEffect} from 'react'
import {Navigate,redirect,useNavigate} from 'react-router-dom'
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
import * as action from "../redux/login/loginAction";
import { connect } from "react-redux";
const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});
function Login(props)
{
    const [login,setLogin]=useState(false)
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState(false)
    const navigate = useNavigate();
   
 const  handleUsernameChange = e => {
    // this.setState({
    //   username: e.target.value,
    // });
    setUsername(e.target.value)
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


 const handleSubmit = e => {
    e.preventDefault();
 // django request

 console.log(username,)
//  try{
//   const res = await axios.post(
//     `http://192.168.137.185:8000/`,

//           {
//         password,username,first_name,last_name,email
//     }
//   );
//   console.log(res)
// }
// catch(err){
//   console.log(err)
// }
    props.login(username, password);
    // const res = await axios.post(
    //   `http://192.168.137.185:8000/`, {
    //       username,password
    //   }
    
    // );
  global.config.secureStorage.getItem("username",username)
  global.config.secureStorage.setItem(
    "logged",
    true
  );
  navigate("/")
  };
    return (
        <div
        style={{ "marginTop":"20vh"}}>
        
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div 
          >
            <Avatar 
            style={{"margin":"auto"}}
            >
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography
              style={{"margin":"auto","textAlign":"center"}} 
              component="h1" variant="h5">
              Sign in
            </Typography>
            <form 
            //</div>className={classes.form} noValidate
            >
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
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                //className={classes.submit}
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

//export default Login

const mapStateToProps = state => {
  //
  return {
    loggedIn: state.loginReducer.loggedIn,
    error: state.loginReducer.error,
    notifications: state.notifications,
  };
};

const mapDispatchToProps = dispatch => {
  return {
     login: (username,password) => dispatch(action.login(username,password)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
import React, { useEffect, useState } from "react";
import "./styles/WebExample.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "../redux/login/loginAction";
import axios from "axios";
import vid1 from "./vid/vid1.mp4";
import vid2 from "./vid/vid3.mp4";
import vid3 from "./vid/vid3.mp4";
import vid4 from "./vid/vid4.mp4";
import { Button } from "@material-ui/core";
const Webexample = (props) => {
  const [mdata, setMdata] = useState({});
  const [vids, setVids] = useState("");
   const navigate= useNavigate()
  const handlelogOut = () => {
    

    props.logout();
   navigate("/")
  };

  const getdata = async () => {
    let to_return = {};
    try {
      const res = await axios
        .get(`http://192.168.137.185:8000/random/`)
        .then((resp) => {
          console.log("check this", resp);
          // to_return=resp
          setMdata(resp.data);
          // if( mdata.title === "Ajanta-Ellora-Caves")
          // {
          setVids("./vid/vid1.mp4");
          // }
          console.log("mdata ", mdata);
        });
    } catch (err) {
      console.log(err);
    }
    // return to_return
  };
  useEffect(() => {
    let x = false;
    const data = getdata();
    //console.log("data", data);
    //setMdata(data);
    return () => {
      x = true;
    };
  }, []);
  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  return (
    <div
      className="content1"
      style={{
        backgroundImage: `url(${mdata.image})`,
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
      }}
    >
      <header className="header">
       
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
            // <Link  to ="/webexample">
            // <li className="bt" style={{"marginRight":"0px"}} onClick={handlelogOut}>logout</li>
            // </Link>
            <Button onClick={handlelogOut}>Logout</Button>
          )}
          </ul>
      
   
    </header>
      {mdata.title !== undefined ? (
        <div className="body">
          <div className="shorts">
            {mdata.title === "Ajanta-Ellora-Caves" ? (
              <video
                src={vid1}
                width="350"
                height="800"
                controls="controls"
                autoplay="true"
              />
            ) : (
              ""
            )}
            {mdata.title === "City_Palace" ? (
              <video
                src={vid2}
                width="350"
                height="800"
                controls="controls"
                autoplay="true"
              />
            ) : (
              ""
            )}
            {mdata.title === "Raigad-Fort" ? (
              <video
                src={vid3}
                width="350"
                height="800"
                controls="controls"
                autoplay="true"
              />
            ) : (
              ""
            )}
            {mdata.title === "Amber_Fort" ? (
              <video
                src={vid4}
                width="350"
                height="800"
                controls="controls"
                autoplay="true"
              />
            ) : (
              ""
            )}
            {/* <iframe
            src={mdata.short}
            frameborder="0"
            // allow='autoplay; encrypted-media'
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="video"
          /> */}
          </div>
          <div className="data">
            <div className="display">
              <div className="display-center">
                <h1>{mdata ? `${mdata.title}` : ""} </h1>
              </div>
              <div className="display-center quote">
                <h3>{mdata ? `${mdata.quote}` : ""}</h3>
              </div>
              <div className="display-center desc">
                <h5>{mdata ? `${mdata.description}` : ""}</h5>
              </div>
              <div className="facts">
                <h3 className="display-center">Facts</h3>
                <div className="display-center fact-desc">
                  <ul>
                    <li>
                      <h5>{mdata ? mdata.fact1 : ""}</h5>
                    </li>
                    <li>
                      <h5>{mdata ? `${mdata.fact2}` : ""}</h5>
                    </li>
                    <li>
                      <h5>{`${mdata.fact3}`}</h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

//export default  Webexample
const mapStateToProps = (state) => {
  //
  return {
    loggedIn: state.loginReducer.loggedIn,
    error: state.loginReducer.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(action.logout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Webexample);

import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
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
import axios from "axios";

function Adddata() {
  //
  const [imglink, setImglink] = useState("");
  const [title, setTitle] = useState(""); //
  const [desp, setDesp] = useState(""); //
  const [quote, setQuote] = useState(""); //
  const [fact1, setFact1] = useState(""); //
  const [fact2, setFact2] = useState("");
  const [fact3, setFact3] = useState("");
  const [ytlink, setYtlink] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDespChange = (e) => {
    setDesp(e.target.value);
  };
  const handleQuoteChange = (e) => {
    setQuote(e.target.value);
  };
  const handleFact1Change = (e) => {
    setFact1(e.target.value);
  };
  const handleFact2Change = (e) => {
    setFact2(e.target.value);
  };
  const handleFact3Change = (e) => {
    setFact3(e.target.value);
  };
  const handleImgLinkChange = (e) => {
    setImglink(e.target.value);
  };
  const handleYtlinkChange = (e) => {
    setYtlink(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://192.168.137.185:8000/monuments/`,

        {title,image:imglink,quote,description:desp,fact1,
        fact2,fact3,short:ytlink}
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    setTitle("");
    setDesp("");
    setQuote("");
    setFact1("");
    setFact2("");
    setFact3("");
    setImglink("");
    setYtlink("");

  };
  return (
    <div>
      <Container component="main" maxWidth="xs" style={{ marginTop: "15vh" }}>
        <CssBaseline />
        <Typography component="h1" variant="h5">
          Add data
        </Typography>
        <TextField
          value={title}
          onChange={handleTitleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="title"
          label="title"
          name="tel"
          autoComplete="tel"
          autoFocus
        />
        <TextField
          value={desp}
          onChange={handleDespChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="desp"
          label="desp"
          name="tel"
          autoComplete="tel"
          autoFocus
        />
        <TextField
          value={quote}
          onChange={handleQuoteChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="quote"
          label="quote"
          name="tel"
          autoComplete="tel"
          autoFocus
        />
        <TextField
          value={fact1}
          onChange={handleFact1Change}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="fact1"
          label="fact1"
          name="tel"
          autoComplete="tel"
          autoFocus
        />
         <TextField
          value={fact2}
          onChange={handleFact2Change}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="fact2"
          label="fact2"
          name="tel"
          autoComplete="tel"
          autoFocus
        />
        <TextField
          value={fact3}
          onChange={handleFact3Change}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="fact3"
          label="fact3"
          name="tel"
          autoComplete="tel"
          autoFocus
        />
        <TextField
          value={imglink}
          onChange={handleImgLinkChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="imglink"
          label="imglink"
          name="tel"
          autoComplete="tel"
          autoFocus
        />
        <TextField
          value={ytlink}
          onChange={handleYtlinkChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="vedio link "
          label="vedio link"
          name="tel"
          autoComplete="tel"
          autoFocus
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          // className={classes.submit}
        >
          Submit
        </Button>
        <Box mt={8}></Box>
      </Container>
    </div>
  );
}

export default Adddata;

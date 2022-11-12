const router = require("express").Router();
const axios=require("axios")
// const { default: axios } = require("axios");
const config = require("config");
const dotenv = require("dotenv");
require("dotenv").config();


router.route("/data/getit").get(async (req, res) => {
      try{
 const resp= await axios.get("https://api.geoapify.com/v2/places?categories=building.historic&filter=place:51cbc71b4c8170524059339edc968dfb3340f00101f901e0dc9d0000000000c002099203064e617368696b&limit=20&apiKey=38cc8c4a0caa43baad9f889e399aca4d")
  // const data= await resp.json()
//    resp = JSON.stringify(resp);
//     resp = JSON.parse(resp);
 console.log(resp);
res.status(200).send(resp)
      }
      catch(err){
        console.log(err)
        res.status(400).send({error:err.message})
      }
  });
 
  module.exports = router;
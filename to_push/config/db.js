const mongoose = require("mongoose");
const config = require("config");
let db = ""

// const db = config.get("mongoAtlas");

if (config.get("ENVIORNMENT") == 'local') {
  db = config.get("mongoURI");
} else if (config.get("ENVIORNMENT") == "production") {
  db = config.get("mongoAtlas");
}

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      dbName: "historicalDB",
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error("Error in Connection", err.message);
    // Exit process with failure
    process.exit(1);
  }
};

//"mongoURI": "mongodb+srv://rootUser:rootUserPa$$word@sss-x10cv.mongodb.net/Construction?retryWrites=true&w=majority"

module.exports = connectDB;

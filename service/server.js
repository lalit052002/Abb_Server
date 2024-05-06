const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8800;
const { connectDB } = require("./connection.js");
const userRouter = require("../Routes/user.js");
const assetList = require("../Routes/assetList.js");
const { logReqRes } = require("../middleware/index.js");
const bodyParser = require("body-parser");
const cors = require("cors");

// Configure CORS to allow requests from all origins
app.use(cors());

//Mongo db connection
connectDB(); 
//middleware -> plugins
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));
app.use(bodyParser.json());
//routes
app.use("/api/assetlist", assetList);
app.use("/api/user", userRouter);
app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});

// SlAkIpmrhZt5QeVd
// abbDev

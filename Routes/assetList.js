const express = require("express");
const router = express.Router();
const { createNewAsset, getAllAsset } = require("../Controllers/assetList.js");

//-------get all users and create new user-------------------
router.route("/").get(getAllAsset).post(createNewAsset);

//-----------perform crud ----------------

module.exports = router;

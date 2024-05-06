const AssetList = require("../Models/assetList.js");
const ConnectivityStatus = [
  "Connected",
  "DisConnected",
  "Partly Connected",
  "All",
];
const HealthIndex = ["Good", "Poor", "Fair", "Very Poor"];

async function getAllAsset(req, res) {
  try {
    const { connectivityStatus, healthIndex } = req.query;
    const filter = {};
    const status = ConnectivityStatus.find(
      (item) => item === connectivityStatus
    ); 
    const health = HealthIndex.find((item) => item === healthIndex);
    if (status) {
      filter.deviceConnectivityStatus = status;
      if (health) filter.healthIndex = health;
    } else {
      res.status(400).json({ error: "Validation Error" });
    }
    const data =
      status === "All" && healthIndex === "Unknown"
        ? await AssetList.find({})
        : await AssetList.find(filter);
    res.json({ summary: data });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function createNewAsset(req, res) {
  // create new user
  const asset_list = req.body;
  if (asset_list.length > 1) {
    await AssetList.insertMany(asset_list);
  } else {
    await AssetList.create(asset_list);
  }
  return res.status(201).json({ summary: asset_list });
}
module.exports = {
  getAllAsset,
  createNewAsset,
};

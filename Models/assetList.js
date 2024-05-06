const mongoose = require("mongoose");

const summarySchema = new mongoose.Schema({
  name: String,
  image: String,
  connection: Boolean,
  healthIndex: String,
  condition: String,
  deviceConnectivityStatus: String,
  equipmentCount: Number,
  lastValueTime: Date,
  plantType: String,
  deviceType: String,
  isDianaSupported: String,
  isDianaCapable: String,
  manufacturer: String,
  deviceTypeCode: String,
  model: String,
  serialNumber: String,
  electricalRemaining: String,
  cbSerialNumber: String,
  averageLoad: String,
});
// const dataSchema = new mongoose.Schema({
//   summary: [summarySchema],
//   total: Number, 
// });



module.exports = mongoose.model("asset_lists", summarySchema);

 
const mongoose = require("mongoose");
const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://abbDev:SlAkIpmrhZt5QeVd@abbability.vkbwpns.mongodb.net/abb_ability?retryWrites=true&w=majority&appName=abbAbility",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
      }
    )
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = { connectDB };

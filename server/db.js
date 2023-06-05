const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log(`connected to temp`))
  .catch((err) =>
    console.error(`connection to temp Failed -  ${err.message}`)
  );

module.exports = mongoose;

const mongoose = require("mongoose");

const connectDb = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log("Connected to DB...."))
    .catch((err) => console.log(err));
};

module.exports = connectDb;

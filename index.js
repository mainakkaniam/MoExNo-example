const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/UserRoutes");
require('dotenv').config();//vvimp line for using .env variables

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRouter);

//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CRUD",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.listen(3001, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

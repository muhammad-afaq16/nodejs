const express = require("express");
const tasksRouter = require("./src/routes/task");
const app = express();
const connectDB = require("./db/connect");
const notFound = require("./src/middleware/not-found");
const errorHandlerMiddleware = require("./src/middleware/error-handler");
require("dotenv").config();

const port = 3000;

app.use(express.static('./public'));
app.use(express.json());

// Routes
app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/tasks", tasksRouter);



app.use(notFound)
app.use(errorHandlerMiddleware)



const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("Connected to the database");
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

start();

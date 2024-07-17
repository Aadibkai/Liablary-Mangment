import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
dotenv.config();
const { PORT, MONGOURL } = process.env;
// const PORT = 3000;

// const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.use("/api", userRoutes);

mongoose
  .connect(MONGOURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongoose connect");
  })
  .catch((err) => console.error(err));
app.listen(PORT , () => {
  console.log("listening on port 4000");
});

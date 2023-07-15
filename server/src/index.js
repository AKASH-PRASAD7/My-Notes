import express from "express";
import dotenv from "dotenv";
import DbConnection from "./model/DbConnection";

const app = express();
app.use(express.json());
dotenv.config();

const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  try {
    DbConnection();
    console.log(`Server Running on port ${port} !`);
  } catch (error) {
    console.log("Server Error :", error);
  }
});

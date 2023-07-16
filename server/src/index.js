import express from "express";
import dotenv from "dotenv";
import DbConnection from "./model/DbConnection";
import auth from "./api/auth";
dotenv.config();
const app = express();
app.use(express.json());

const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  try {
    DbConnection().then(() => {
      console.log(`Server Running on port ${port} !`);
    });
  } catch (error) {
    console.log("Server Error :", error);
  }
});

//Routing

app.use("/auth", auth);

import express from "express";
import "dotenv/config";
import DbConnection from "./model/DbConnection";
import auth from "./api/auth";
const app = express();
app.use(express.json());

const port = process.env.PORT || 8001;

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

//Routing
app.use("/user", auth);

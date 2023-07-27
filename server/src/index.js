import express from "express";
import "dotenv/config";
import DbConnection from "./model/DbConnection";
import auth from "./api/auth";
import user from "./api/User";
import notes from "./api/notes";
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
app.use("/auth", auth);
app.use("/user", user);
app.use("/notes", notes);

app.get("/*", (req, res) => {
  return res.status(404).send("Page Not Found!");
});

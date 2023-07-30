import express from "express";
import cors from "cors";
import "dotenv/config";
import DbConnection from "./model/DbConnection";
import auth from "./api/auth";
import user from "./api/User";
import notes from "./api/notes";
import cookieParser from "cookie-parser";
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

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

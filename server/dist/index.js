"use strict";

var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
require("dotenv/config");
var _DbConnection = _interopRequireDefault(require("./model/DbConnection"));
var _auth = _interopRequireDefault(require("./api/auth"));
var _User = _interopRequireDefault(require("./api/User"));
var _notes = _interopRequireDefault(require("./api/notes"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
app.use((0, _cors.default)({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(_express.default.json());
app.use((0, _cookieParser.default)());
const port = process.env.PORT || 8001;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  try {
    (0, _DbConnection.default)();
    console.log(`Server Running on port ${port} !`);
  } catch (error) {
    console.log("Server Error :", error);
  }
});

//Routing
app.use("/auth", _auth.default);
app.use("/user", _User.default);
app.use("/notes", _notes.default);
app.get("/*", (req, res) => {
  return res.status(404).send("Page Not Found!");
});
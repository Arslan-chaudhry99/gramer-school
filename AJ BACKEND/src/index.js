const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const app = express();
dotenv.config({ path: path.join(__dirname, "./config.env") });
require("./db/conn");
app.use(express.json())
const PORT = process.env.PORT;
// const User = require("./Model/usersSchema");
app.use(require("./router/Auth"));
app.use(require("./router/Ledger"));
app.use(require("./router/Admission"));
//server listener


app.listen(PORT, () => {
  console.log(`connnection successful running on port ${PORT}`);
});

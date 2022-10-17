const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const app = express();
dotenv.config({ path: path.join(__dirname, "./config.env") });
require("./db/conn");
app.use(express.json())
const PORT = process.env.PORT;
app.use('/public', express.static('public'));
const corn=require("node-cron")
const fun=require("../src/router/GeneratingFees")
// app.use('/public', express.static(path.join(__dirname, "public")));
// const User = require("./Model/usersSchema");
app.use(require("./router/Auth"));
app.use(require("./router/Ledger"));
app.use(require("./router/Admission"));
app.use(require("./router/CurrentFees"))
app.use(require("./router/CurrentFees"))
//server listener
corn.schedule("34 21 17 * *", function(){
  console.log("work");
  fun()
})


app.listen(PORT, () => {
  console.log(`connnection successful running on port ${PORT}`);
});

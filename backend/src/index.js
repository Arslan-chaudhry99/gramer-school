const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const app = express();
dotenv.config({ path: path.join(__dirname, "./config.env") });
require("./db/conn");
const jwt = require("jsonwebtoken");
app.use(express.json())
const PORT = process.env.PORT;
app.use('/public', express.static('public'));
const corn = require("node-cron")
const fun = require("../src/controllers/GeneratingFees")
const cookieParser = require('cookie-parser');
app.use(cookieParser())
const Authenticate = require("../src/middleware/Authenticate")
let bodyParser = require('body-parser')


app.use(require("./controllers/Auth"));
app.use(require("./controllers/Ledger"));
app.use(require("./controllers/Admission"));
app.use(require("./controllers/CurrentFees"))

corn.schedule("39 12 27 * *", function () {
  console.log("work");
  fun()
})
app.get('/*', (request, response) => {
  response.sendFile(path.join(__dirname, '../public/index.html'));
});





app.listen(PORT, () => {
  console.log(`connnection successful running on port ${PORT}`);
});

app.post("/addProduct",(req,res)=>{
console.log(req);
})
const express = require("express");
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers
const postCar = require("./routes/Cars");
app.use("/cars", postCar);

const postPrice = require("./routes/Price");
app.use("/prices", postPrice);

const postAcc = require("./routes/Accesories");
app.use("/accs", postAcc);

const postLimit = require("./routes/Limit");
app.use("/limits", postLimit);

const postDep = require("./routes/Deposit");
app.use("/deps", postDep);

db.sequelize.sync().then(()=>{
    app.listen(3001, () =>{
        console.log("Server running on port 3001");
    });
})
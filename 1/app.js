const express = require("express");
const app = express();
const port = 5000;
const { join } = require("path");
const appRoutes = require("./routes/appRoutes.js");

app.use(express.static(join(__dirname, "./public")));
app.set("view engine", "ejs");
app.set("views", join(__dirname, "./views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use("/",appRoutes)

app.listen(port, () => console.log(`server running on port ${port}`));

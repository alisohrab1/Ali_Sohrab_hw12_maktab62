const express = require("express");
const PORT = 5000;
const app = express();
const appRoutes = require("./routes/appRoutes");
const { join } = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");


//********before changes */
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: 10000000000 },
    resave: false
}));
app.use(flash());

// app.use(cookieParser('secret'));

// app.use(session({cookie: { maxAge: 60000 }}));

// app.use(flash());

app.use(express.static(join(__dirname, "./public")));
app.set("view engine", "ejs");

// app.set('views', join(__dirname, './views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", appRoutes);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

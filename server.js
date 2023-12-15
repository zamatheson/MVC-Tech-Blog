const path = require("path");
require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");

const hbs = exphbs.create({ helpers });

const session = require("express-session");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sequelize = require("./config/connection");


const app = express();
const PORT = process.env.PORT || 3001;

// cookie properties
const sess = {
    secret: "a_very_secret_key",
    cookie: {
        maxAge: 270000,
        httpOnly: true,
        secure: false,
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),    
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// turn routes on
app.use(routes);

// sync sequelize with databse
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}!`));
});
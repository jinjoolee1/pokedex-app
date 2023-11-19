const express = require("express");
const sequelize = require('./config/connection');
const session = require('express-session');
const routes = require('./controllers');

require("dotenv").config();

const app = express();
const PORT = 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'MySecret', 
    cookie: {
        // expire after 30 minutes of inactivity
        // (30mins * 60secs) * 1000
        expires: (30 * 60) * 1000
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// activate routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
});
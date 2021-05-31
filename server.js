const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers

// Inform Express.js on which template engine to use

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT:${PORT}!`));
});

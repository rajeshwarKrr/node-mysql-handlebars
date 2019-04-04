const express = require('express');
const path = require('path')
const bodyparser = require('body-parser');
const hbs = require('express-handlebars');

const mysqlConnection = require('./config/db');
const routes = require('./routes/index');

const app = express();

app.use('/', routes);

app.engine('handlebars', hbs({extname: 'handlebars', defaultLayout: 'layout' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'path')));

// Port setting
app.listen(3000, () => {
  console.log('Express server is running at port : 3000');
})

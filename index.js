const mysql = require('mysql');
const express = require('express');

const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

const mysqlConnection  = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'employee'
});

mysqlConnection.connect((err) => {
  if(!err)
  {
    console.log('dbconnected');
  } else {
    console.log('dbconnection failed ', JSON.stringify(err, undefined, 2));
  }
});

app.get('/employees' , (req, res) => {
  mysqlConnection.query('select * from employee', (err, rows, fields) => {
    if(!err) {
      console.log(rows);
      res.json(rows);
    } else {
      console.log(err);
    }

  })
})

app.get('/employees/:id', (req, res) => {
  mysqlConnection.query('select * from employee where empid = ?',[req.params.id] , (err, rows, fields) => {
    if(!err) {
      console.log(rows);
      res.json(rows);
    } else {
      console.log(err);
    }
  })
})

app.listen(3000, () => {
  console.log('Express server is running at port : 3000');
})

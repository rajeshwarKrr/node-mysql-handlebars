// const mysql = require('mysql');
const express = require('express');
const path = require('path')
const bodyparser = require('body-parser');
const hbs = require('express-handlebars');

const mysqlConnection = require('./config/db');
const routes = require('./routes/index');

const app = express();

app.engine('handlebars', hbs({extname: 'handlebars', defaultLayout: 'layout', layoutsDir: __dirname+ '/views/layouts/' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'path')));

app.use('/', routes);

// const mysqlConnection  = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'employee'
// });


// Fetch all employees
// app.get('/employees' , (req, res) => {
//   mysqlConnection.query('select * from employee', (err, rows, fields) => {
//     if(!err) {
//       console.log(rows);
//       res.json(rows);
//     } else {
//       console.log(err);
//     }
//
//   })
// });
//
// // Fetch one employee using id
// app.get('/employees/:id', (req, res) => {
//   mysqlConnection.query('select * from employee where empid = ?',[req.params.id] , (err, rows, fields) => {
//     if(!err) {
//       console.log(rows);
//       res.json(rows);
//     } else {
//       console.log(err);
//     }
//   })
// });
// // Insert a employee
// app.post('/employees', (req,res) => {
//   let sql = `INSERT INTO employee (name,salary,empcode)  VALUES ('${req.body.name}','${req.body.salary}','${req.body.empcode}')`;
//   console.log(sql);
//   mysqlConnection.query(sql, (err, rows, fields) => {
//     if(!err) {
//       console.log("inserted Succesfully");
//       res.send("inserted Succesfully")
//     } else {
//       console.log(err);
//       res.send(err);
//     }
//   })
// });
// // update a employee using ID
// app.put('/employees', (req,res) => {
//   let sql = `UPDATE employee SET salary='${req.body.salary}' WHERE empid='${req.body.empid}'`;
//   console.log(sql);
//   mysqlConnection.query(sql, (err, rows, fields) => {
//     if(!err) {
//       console.log("updated Succesfully");
//       res.send("updated Succesfully");
//     } else {
//       console.log(err);
//       res.send(err);
//     }
//   })
// })
// // delete a employee using ID
// app.delete('/employees/:id', (req,res) => {
//   mysqlConnection.query('delete from employee where empid = ?',[req.params.id] , (err, rows, fields) => {
//     if(!err) {
//       console.log("Deleted Succesfully : ", req.params.id);
//       res.send("Deleted Succesfully");
//     } else {
//       throw err;
//     }
//   })
// });
// Port setting
app.listen(3000, () => {
  console.log('Express server is running at port : 3000');
})

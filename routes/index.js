const express = require('express');
const router = express.Router();
const mysqlConnection = require('../config/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cool, huh!', condition: true, anyArray: [1,2,3] });
});

// Fetch all employees
router.get('/employees' , (req, res) => {
  mysqlConnection.query('select * from employee', (err, rows, fields) => {
    if(!err) {
      console.log(rows);
      res.json(rows);
    } else {
      console.log(err);
    }

  })
});

// Fetch one employee using id
router.get('/employees/:id', (req, res) => {
  mysqlConnection.query('select * from employee where empid = ?',[req.params.id] , (err, rows, fields) => {
    if(!err) {
      console.log(rows);
      res.json(rows);
    } else {
      console.log(err);
    }
  })
});
// Insert a employee
router.post('/employees', (req,res) => {
  let sql = `INSERT INTO employee (name,salary,empcode)  VALUES ('${req.body.name}','${req.body.salary}','${req.body.empcode}')`;
  console.log(sql);
  mysqlConnection.query(sql, (err, rows, fields) => {
    if(!err) {
      console.log("inserted Succesfully");
      res.send("inserted Succesfully")
    } else {
      console.log(err);
      res.send(err);
    }
  })
});
// update a employee using ID
router.put('/employees', (req,res) => {
  let sql = `UPDATE employee SET salary='${req.body.salary}' WHERE empid='${req.body.empid}'`;
  console.log(sql);
  mysqlConnection.query(sql, (err, rows, fields) => {
    if(!err) {
      console.log("updated Succesfully");
      res.send("updated Succesfully");
    } else {
      console.log(err);
      res.send(err);
    }
  })
})
// delete a employee using ID
router.delete('/employees/:id', (req,res) => {
  mysqlConnection.query('delete from employee where empid = ?',[req.params.id] , (err, rows, fields) => {
    if(!err) {
      console.log("Deleted Succesfully : ", req.params.id);
      res.send("Deleted Succesfully");
    } else {
      throw err;
    }
  })
});

module.exports = router;

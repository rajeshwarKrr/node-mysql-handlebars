const mysql = require('mysql');

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


module.exports = mysqlConnection;

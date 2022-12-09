const mysql = require('mysql');

//Create Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
});
// Execute connection
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('DB connection OK');
});

db.connect(function (err) {
  if (err) throw err;
  //Select all customers and return the result object:
  con.query('SELECT * FROM customers', function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

// Execute query
db.query('SELECT * FROM `users`', (err, results) => {
  if (err) {
    throw err;
  }
  console.log(results);
});

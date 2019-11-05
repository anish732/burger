var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "#mar1996", // add your local password here.
    database: "burger_db" // add your db name here
  });
  connection.connect(function(err){
    console.log("err",err)
    console.log("Connected as ID: " + connection.threadId);
  })
}


// Export connection for our ORM to use.
module.exports = connection;

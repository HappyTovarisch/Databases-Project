var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "country"
});

con.connect();

function getInfo(country) {
  con.query(
    `SELECT * FROM Countries_in_Europe WHERE Country_Name='${country.toString()}'`,
    function(err, result, fields) {
      if (err) {
        console.log(document.getElementById("basic-url").value);
        throw err;
      } else {
        document.getElementById("sol").innerHTML = JSON.stringify(result);
      }
    }
  );
}

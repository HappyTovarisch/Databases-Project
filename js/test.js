var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "country"
});

con.connect();

function getInfo() {
  con.query(
    `SELECT * FROM Countries_in_Europe WHERE Country_Name='${
      document.getElementById("basic-url").value
    }'`,
    function(err, result, fields) {
      if (err) {
        console.log(document.getElementById("basic-url").value);
        throw err;
      } else {
        document.getElementsByClassName("sol").innerHTML = JSON.stringify(
          result
        );
        window.alert(document.getElementsByClassName("sol").innerHTML)
        console.log(document.getElementsByClassName("sol").innerHTML)
      }
    }
  );
}

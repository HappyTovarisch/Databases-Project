var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "country"
});

con.connect();

function displayEthnicities() {

    var item = {}
    var ethnicID = ``;
    var ethnicName = ``;
    var ethnicRel = ``;
    var ethincCountry = ``;

    let buffer1='';
    let buffer2='';
    let buffer3='';
    let buffer4='';

    con.query(
        `SELECT ID FROM ethnic_groups`,
        function (err, result, fields) {
            if (err) {
                throw err;
            }
            else {
                for (x = 0; x<=result.length; x++) {
                    item = result[x];
                    console.log(item);
                    ethnicID = item.ID;
                    buffer1+=`<li><a href=#${ethnicID}></a>${ethnicID}</li>`;
                    document.getElementById('ethnicIDs').innerHTML = buffer1;
                }
            }
        }
    );
    con.query(
        `SELECT Name FROM ethnic_groups`,
        function (err, result, fields) {
            if (err) {
                throw err;
            }
            else {
                for (x = 0; x<=result.length; x++) {
                    item = result[x];
                    console.log(item);
                    ethnicName = item.Name;
                    buffer2+=`<li><a href=#${ethnicName}></a>${ethnicName}</li>`;
                    document.getElementById('ethnicNames').innerHTML = buffer2;
                }
            }
        }
    );
    con.query(
        `SELECT religion_Name FROM ethnic_groups, religion WHERE ethnic_groups.Religion = religion.ID`,
        function (err, result, fields) {
            if (err) {
                throw err;
            }
            else {
                for (x = 0; x<=result.length; x++) {
                    item = result[x];
                    console.log(item);
                    ethnicRel = item.religion_Name;
                    buffer3+=`<li><a href=#${ethnicRel}></a>${ethnicRel}</li>`;
                    document.getElementById('ethnicRels').innerHTML = buffer3;
                }
            }
        }
    );
    con.query(
        `SELECT Country_Name FROM ethnic_groups, countries_in_europe WHERE ethnic_groups.Country = countries_in_europe.ID`,
        function (err, result, fields) {
            if (err) {
                throw err;
            }
            else {
                for (x = 0; x<=result.length; x++) {
                    item = result[x];
                    console.log(item);
                    ethnicCountry = item.Country_Name;
                    buffer4+=`<li><a href=#${ethnicCountry}></a>${ethnicCountry}</li>`;
                    document.getElementById('ethnicCountries').innerHTML = buffer4;
                }
            }
        }
    );

    
}
displayEthnicities();

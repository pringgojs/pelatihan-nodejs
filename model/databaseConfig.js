var mysql = require('mysql');

var dbconnect = {
    getConnection: function () {
        var conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "db_pelatihan_nodejs"
        });
        return conn;
    }
};
module.exports = dbconnect
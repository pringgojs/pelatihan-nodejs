var db = require('./databaseConfig.js');

var userDB = {
    getUser: function (id, callback) {
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err,null);
            } else {
                console.log("Connected!");
                var sql = 'SELECT * FROM user WHERE id = ?';
                conn.query(sql, [id], function (err, result) {
                    conn.end();
                    if (err) {
                        console.log(err);
                        return callback(err,null);
                    } else {
                        return callback(null, result);
                    }
                });
            }
        });
    }
} 
 
module.exports = userDB 
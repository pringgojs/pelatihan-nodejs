var express = require('express'); 
var user = require('../model/user.js');
var app = express();

app.get('/api/user/:userid', function (req, res) {
    var id = req.params.userid;

    user.getUser(id, function (err, result) { 
        if (!err) { 
            res.send(result); 
        } else { 
            res.status(500).send('someting went wrong'); 
        } 
    });
});

module.exports = app
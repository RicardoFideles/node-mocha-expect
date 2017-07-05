const express = require('express');

var app = express();

app.get('/', (req,res) => {
    res.status(404).send({
        error : 'Page not found',
        name : 'Todo app v1'
    })
});

app.get('/users', (req, res) => {
    var users = [
        {
            firtname: "Ricardo",
            age : 32
        },
        {
            firtname: "Nathaly",
            age : 31
        }
        ,{
            firtname: "Charles",
            age : 25
        }
    ]
    res.send(users);
});

app.listen(3000);

module.exports.app = app;
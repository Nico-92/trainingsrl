var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'eu-cdbr-west-01.cleardb.com',
    user: 'b19299cffa4916',
    password: '04a99098',
    database: 'heroku_8d40c9dce4ad300'
});

var login = function(param, callback) {
    console.log(param)
    /*
	[ RowDataPacket {
    id: 4,
    username: 'ntresoldi',
    password: 'prova',
    email: 'nicolo.tresoldi@hotmail.it',
    role: 1 },
  RowDataPacket {
    id: 14,
    username: 'prova',
    password: 'prova',
    email: 'nicolo2.tresoldi@hotmail.it',
    role: 2 } ]

	*/
    connection.query('SELECT * FROM users WHERE username = "' + param.username + '" AND password = "' + param.password + '" ;', function(err, rows, fields) {
        if (err) throw err;
        console.log(rows[0]);
        callback(rows[0]);
    });
};

var createNewClient = function(param, callback) {
    connection.query('INSERT INTO anagrafiche SET ?', param.user, function(err, rows, fields) {
        if (err) throw err;
        console.log(rows[0]);
    });
};

var getClients = function(param, callback) {
    console.log('aaaaaaaa')
    connection.query('SELECT * FROM anagrafiche', function(err, rows, fields) {
        if (err) throw err;
        callback(rows)
    });
};

var getClient = function(param, callback) {
    connection.query('INSERT INTO anagrafiche SET ?', param.user, function(err, rows, fields) {
        if (err) throw err;
        console.log(rows[0]);
    });
};



var exports = {
    login: login,
    createNewClient: createNewClient,
    getClient: getClient,
    getClients: getClients
};

module.exports = exports;
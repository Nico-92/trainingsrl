var express = require('express');
var request = require("request");
var router = express.Router();
var _ = require('lodash-node');
var mysql = require('../../libraries/cleardb.js');

// LOGGA UN UTENTE GIA ESISTENTE
router.post('/login', function(req, res, next) {
    var query =  {
        username: req.body.loginParams.user,
        password: req.body.loginParams.password
    };
    mysql.login(query, function(result){
    	if(result !== undefined){
    		res.json('true');
    	}else{
    		res.json('false');
    	}
    });
});

module.exports = router
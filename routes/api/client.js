var express = require('express');
var router = express.Router();
var _ = require('lodash-node');
var mysql = require('../../libraries/cleardb.js');

router.post('/client', function(req, res, next) {
    mysql.createNewClient(req.body.object, function(result){
    	if(result !== undefined){
    		res.json('true');
    	}else{
    		res.json('false');
    	}
    });
});

module.exports = router
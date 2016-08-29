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

router.get('/client', function(req, res, next) {
	console.log('sono qui')
    mysql.getClients(undefined, function(result){
    	res.json(result);
    	// console.log(result)
    	// if(result !== undefined){
    	// 	res.json('true');
    	// }else{
    	// 	res.json('false');
    	// }
    });
});

router.get('/client/:id', function(req, res, next) {
    mysql.getClient(req.params.id, function(result){
    	if(result !== undefined){
    		res.json('true');
    	}else{
    		res.json('false');
    	}
    });
});

module.exports = router
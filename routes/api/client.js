var express = require('express');
var router = express.Router();
var _ = require('lodash-node');
var moment = require('moment');
var mysql = require('../../libraries/cleardb.js');

router.post('/client', function(req, res, next) {
	req.body.object.user.submissiondate = moment().format("YYYY-MM-DD");
    mysql.createNewClient(req.body.object, function(result){
    	if(result !== undefined){
    		res.json('true');
    	}else{
    		res.json('false');
    	}
    });
});

router.get('/clients', function(req, res, next) {
	console.log('sono qui')
    mysql.getClients(undefined, function(result){
        _.each(result, function(elem){
            elem.submissiondate = moment(result.submissiondate).format('DD/MM/YYYY');
        });
    	console.log(result)
    	res.json(result);
    	// console.log(result)
    	// if(result !== undefined){
    	// 	res.json('true');
    	// }else{
    	// 	res.json('false');
    	// }
    });
});

router.get('/clients/:id', function(req, res, next) {
    mysql.getClient(req.params.id, function(result){
    	if(result !== undefined){
    		res.json('true');
    	}else{
    		res.json('false');
    	}
    });
});

router.delete('/clients/:id', function(req, res, next) {
    console.log('e qui arrivO?')
    mysql.deleteClient(req.params.id, function(result){
        console.log('delete result')
        console.log(result)
        if(result !== undefined){
            res.json('true');
        }else{
            res.json('false');
        }
    });
});

module.exports = router
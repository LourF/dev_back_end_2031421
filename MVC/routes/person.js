var express = require('express');
var router = express.Router();

var personController = require('../controllers/personController');

router.get('/', personController.getAllPerson);

router.post('/', personController.createPerson);

router.delete('/', personController.deletePerson);

router.delete('/:id', personController.deletePerson);

router.get('/id', personController.getPerson);

router.get('/:age/:profession', personController.getPersonAP);

router.put('/:id', personController.putPerson);

module.exports = router;
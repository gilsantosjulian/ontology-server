var express = require('express');
var router = express.Router();
var path = require('path');

/* GET ontologies listing. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public/ontologies', 'html-ontology-organizada.xml'));
});

module.exports = router;

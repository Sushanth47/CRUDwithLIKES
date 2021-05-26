var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var product_controller = require('../controllers/collection');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);


router.post('/create', product_controller.createin);

router.get('/:id', product_controller.detailsin);

router.put('/:id/update', product_controller.updatein);

router.delete('/:id/delete', product_controller.deletein);

router.get('/:id/like', product_controller.liker);

module.exports = router;
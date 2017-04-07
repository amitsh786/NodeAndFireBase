var express = require('express'),
	router = express.Router();
/** default route */
// router.get('/',function(req,res){
// 	// res.json({success: true, message : 'You are Online'});
// });
router.use(require('./signup'));
 router.use('/api',require('./login'));
// @exports Router
 module.exports = router;

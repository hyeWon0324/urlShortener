var express = require('express');
const shorten = require('../helpers/shorten')
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
}); */ 

router.post('/', (req, res, next)=>{
		//Did you get the request 
		const longUrl = req.body.long_url; 
		if(!longUrl){
			res.send({success : false});
			return;
		}
		//console.log(longUrl);
		shorten.shorten(longUrl)
		.then(resultUrl => res.send(resultUrls))
		.catch(err => next(err));  //go to error handler 

		//res.send({success: true}); 
});
module.exports = router;

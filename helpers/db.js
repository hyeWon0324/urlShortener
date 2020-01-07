
/** Dependencies */
const mongoose = require('mongoose'); 
/** Get schemas */
const Address = mongoose.model('address'); 

function findAddress(address){
	return Address.findOne({ original_url : address });
}

/* Exports */ 
module.exports = {
   findAddress,
}; 
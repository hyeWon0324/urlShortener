/** Dependencies */ 
const db = require('./db');

function shorten(url){

    return new Promise((resolve, reject) => {
    		resolve('http://localhost/');
    });
}

/**Exports**/

module.exports = {
	shorten,
};
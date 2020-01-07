const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const addressSchema= new Schema({
	original_url: {
		type: String,
		required: true, 
	}, 
	short_url:{
		type: String,
		required: true,
	}
}, {timestamps: true});

///module.exports = URL = mongoose.model('address', addressSchema); 
mongoose.model('address', addressSchema); 

//mongo Uri // mongodb+srv://dbConnector:1234@cluster0-urh0a.mongodb.net/test?retryWrites=true&w=majority

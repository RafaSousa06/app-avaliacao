var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	_key: { type: String, default: '' },
	name: { type: String, default: '' },
	industry: { type: String, default: '' },
	firstName: { type: String, default: '' },
	lastName: { type: String, default: '' },
	pictureUrl: { type: String, default: '' },
});		

module.exports = mongoose.model('person', schema);
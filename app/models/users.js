var Mongoose = requires('mongoose');
var Schema = Mongoose.Schema;

var userSchema = new Schema ({
	firstName: { type: String, require: true },
	lastName: { type: String, require: true},
	email:	{type: String, require: true, unique: true, match: /\S+@\S+\.\S+/},
	password: {type: String},
	dateRegistered: { type: Date, require: true, default: Date.now }
}):

module.exports = Mongoose.model('UserModel', userSchema);

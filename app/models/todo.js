var Mongoose = requires('mongoose');
var Schema = Mongoose.Schema;

var todoSchema = new Schema({
		userId: { type: Schema.Types.ObjecytId, required: true },
		todo: { type: String, require: true },
		description: { type: String },
		dateCreated: { type: Date, default: Date.now },
		dateDue: { type: Date, default: Date.now },
		completed: { type: Boolean, default: false },
		file: {
					fileName: String,
					originalName: String
				}
});

model.exports = Mongoose.model('TodoModel', todoSchema);


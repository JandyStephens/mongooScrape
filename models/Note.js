var mongoose = require('mongoose');

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// NoteSchema object created using the Schema constructor
// This is similar to a Sequelize model
var NoteSchema = new Schema({
    // `title` must be of type String
    title: String,
    // `body` must be of type String
    body: String
});

// This creates our model from the above schema, using mongoose's model method
var Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;

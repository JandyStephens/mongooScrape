var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// ArticleSchema object made using the Schema constructor
// This is similar to a Sequelize model
var ArticleSchema = new Schema({
    // `title` is required and of type String
    title: {
        type: String,
        required: true
        // unique: true
    },
    summary: {
        type: String,
        required: true
        // unique: true
    },
    // `link` is required and of type String
    link: {
        type: String,
        required: true
        // unique: true
    },

    // `note` is an object that stores a Note id
    // The ref property links the ObjectId to the Note model
    // This allows us to populate the Article with an associated Note
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});


// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the User model
module.exports = Article;

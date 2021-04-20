const mongoose = require('mongoose');
const {
    Schema,
    model
} = mongoose;

const celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String,
    favMovie: {
        type: Schema.Types.ObjectId,
        ref: 'Movie' // relates to the Author model
    }
}, {
    timestamps: true
});

module.exports = model('Celebrity', celebritySchema);
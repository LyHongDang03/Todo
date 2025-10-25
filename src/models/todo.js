const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const Todo = new Schema({
    name: {
        type: String,
    },
    action: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Todo', Todo)
const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://root:root@127.0.0.1:27017/todo?authSource=admin')
        console.log('connect');
    } catch (error) {
        console.log('errro');
        
    }
}

module.exports = { connect }
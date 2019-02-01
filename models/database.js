/* const mongojs = require('mongojs');
const db = mongojs('reviseDB', ['revise'])


const revisedb = {
    mongo: mongojs,
    db: db
};

module.exports = revisedb; */

const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    sno: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

const Contact = module.exports = mongoose.model('revisions', ContactSchema);
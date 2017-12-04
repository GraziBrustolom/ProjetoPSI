const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const caesSchema = new Schema({
    id: String,
    nome: String,
    idade: String,
    raca: String,
    vacinado: String
});

module.exports = mongoose.model('cao', caesSchema, 'caes');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const solicitacaoSchema = new Schema({
    id: String,
    nomeSolicitante: String,
    telefone: String,
    email: String,
    caoId: String,
    caoNome: String,
    aprovacao: String
});

module.exports = mongoose.model('solicitacao', solicitacaoSchema, 'solicitacoes');
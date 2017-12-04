const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Cao = require('../models/cao');
const Solicitacao = require('../models/solicitacao');

const db = "mongodb://admin:projetopsi@ds113826.mlab.com:13826/projetopsi";
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.error("Error! " + err);
    }
});




        // select all
        router.get('/caes', function(req, res) {
            Cao.find({}, function(err, caes) {
                if (err) return console.error(err);
                res.json(caes);
            });
        });

        // count all
        router.get('/caes/count', function(req, res) {
            Cao.count(function(err, count) {
                if (err) return console.error(err);
                res.json(count);
            });
        });

        // create
        router.post('/caes', function(req, res) {

            var newCao = new Cao();
            newCao.id = req.body.id;
            newCao.nome = req.body.nome;
            newCao.idade = req.body.idade;
            newCao.raca = req.body.raca;
            newCao.vacinado = req.body.vacinado;
            newCao.save(function(err, insertedCao) {
                if (err){
                    console.error(err);
                }else{
                    res.json(insertedCao);
                }   
            });
        });

        // find by id
        router.get('/caes/:id', function(req, res) {
            Cao.findOne({ _id: req.params.id }, function(err, obj) {
                if (err) return console.error(err);
                res.json(obj);
            });
        });

        // update by id
        router.put('/caes/:id', function(req, res) {
            Cao.findByIdAndUpdate({ _id: req.params.id },
            {
                $set: {id: req.body.id, nome: req.body.nome, idade: req.body.idade, raca: req.body.raca, vacinado: req.body.vacinado}
            },
            {
                new: true
            }, function(err, updatedCao) {
                if (err) return console.error(err);
                res.json(updatedCao);
            });
        });

        // delete by id
        router.delete('/caes/:id', function(req, res) {
            Cao.findOneAndRemove({ _id: req.params.id }, function(err) {
                if (err) return console.error(err);
                res.sendStatus(200);
            });
        });


//------------------------------------------------------------SOLICITACOES--------------------------------------------------


 // Get Solicitacoes
 router.get('/solicitacao', function(req, res) {
            Solicitacao.find({}, function(err, solicitacoes) {
                if (err) return console.error(err);
                res.json(solicitacoes);
            });
        });

 // find by id
        router.get('/solicitacao/:id', function(req, res) {
            Solicitacao.findOne({ _id: req.params.id }, function(err, obj) {
                if (err) return console.error(err);
                res.json(obj);
            });
        });



 // post solicitacao
router.post('/solicitacao', function(req, res) {

            var newSlct = new Solicitacao();
            newSlct.id = req.body.id;
            newSlct.nomeSolicitante = req.body.nomeSolicitante;
            newSlct.telefone = req.body.telefone;
            newSlct.email = req.body.email;
            newSlct.caoId = req.body.caoId;
            newSlct.caoNome = req.body.caoNome;
            newSlct.aprovacao = "Aguardando Aprovação";

            newSlct.save(function(err, insertedSlct) {
                if (err){
                    console.error(err);
                }else{
                    res.json(insertedSlct);
                }   
            });
        });




        // update by id
        router.put('/solicitacao/:id', function(req, res) {
            Solicitacao.findByIdAndUpdate({ _id: req.params.id },
            {
                $set: {aprovacao: req.body.aprovacao}
            },
            {
                new: true
            }, function(err, updatedSlct) {
                if (err) return console.error(err);
                res.json(updatedSlct);
            });
        });



        // delete by id
        router.delete('/solicitacao/:id', function(req, res) {
            Solicitacao.findOneAndRemove({ _id: req.params.id }, function(err) {
                if (err) return console.error(err);
                res.sendStatus(200);
            });
        });



module.exports = router;
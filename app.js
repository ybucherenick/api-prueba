var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var neo4j = require('neo4j-driver').v1;

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

var driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', '12345'));
var session = driver.session();

// Obtiene todos los servidores -- sin relación --
app.get('/getTodosServidores', function(req, res){
    session.run('MATCH (n:Servidor) RETURN n').then(function(result){
        var servidores = [];
        result.records.forEach(function(item){
            servidores.push({
                id: item._fields[0].properties.id,
                pais: item._fields[0].properties.pais,
                grupo: item._fields[0].properties.grupo,
                host: item._fields[0].properties.host,
                servicio: item._fields[0].properties.servicio,
                conectado: []
            });
        });

        return res.send({ success: true, servidores: servidores });

    }).catch(function(err){
        console.log(err);
        return res.send({ success: err });
    });
})

// Obtiene las relaciones que tiene un servidor en especifico
app.get('/getRelacion/:id', function(req, res){
    var id = req.params.id;
    console.log(req.params.id);
    session.run('MATCH (a:Servidor {id:{idParam}})-[conectado]->(b:Servidor) RETURN b', {idParam: id}).then(function(result){
        var conectados = [];
        result.records.forEach(function(item){
            conectados.push({ id: item._fields[0].properties.id});
        });

        return res.send({ success: true, conectados: conectados });

    }).catch(function(err){
        console.log(err);
        return res.send({ success: err });
    });
})

app.listen(3000);
console.log('Server Started on Port 3000');

module.exports = app;

const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemaUSer = new eschema({
    name: String,
    email: String,
    password: String,
    id: String
})

const UserModel = mongoose.model('users', eschemaUSer)
module.exports = router

/*Ruta de prueba
router.get('/ejemplo', (req, res) => {
    res.end('Saludo carga desde ruta ejemplo')
})*/

//Agregar usuario
router.post('/adduser', (req, res) => {
    const nuevousuario = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        id: req.body.id
    })
    nuevousuario.save(function(err){
        if(!err){
            res.send('User was added')
        }else{
            res.send(err)
        }
    })
})


//Obtener todos los usuarios
router.get('/obtenerusuarios', (req, res) =>{
    UserModel.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})


//Obtener data de usuario
router.post('/obtenerdatausuario', (req, res) =>{
    UserModel.find({idusuario:req.body.idusuario}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})


//actualizar usuario
router.post('/actualizausuario', (req, res) => {
    
    UserModel.findOneAndUpdate({idusuario:req.body.idusuario}, {
        name: req.body.nombre,
        email: req.body.email,
        password: req.body.telefono
    }, (err) => {
        if(!err){
            res.send('User Updated')
        }else{
            res.send(err)
        }
    })
})

//Borrar usuario
router.post('/borrarusuario', (req, res) => {
    
    UserModel.findOneAndDelete({idusuario:req.body.idusuario}, (err) => {
        if(!err){
            res.send('User Deleted')
        }else{
            res.send(err)
        }
    })
})


router.post('/logi', (req, res) => {
    UserModel.find({email:req.body.useremail}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

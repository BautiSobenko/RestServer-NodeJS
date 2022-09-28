//Importo para tener el tipado automatico
const {request, response} = require("express");
 
const usersGet = (req = request, res = response) => {
    
    const { q, nombre = "No name", apikey } = req.query;

    res.json({
        msg: "get API - controlador",
        q,
        nombre,
        apikey
    });
}

const usersPut = (req, res = response) => {
    
    const { id } = req.params;

    res.json({
        msg: "Put API - controlador",
        id
    });
}

const usersPost = (req, res = response) => {
    
    //const body = req.body;
    
    //Pequeña validacion de lo que ingresa en
    //una peticion POST
    const { nombre, localidad } = req.body;

    res.json({
        msg: "Post API - controlador",
        nombre,
        localidad
    });
}

const usersDelete = (req, res = response) => {
    
    res.json({
        msg: "Delete API - controlador"
    });
}

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete
}


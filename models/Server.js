const express = require('express')
const cors = require('cors')

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = "/api/users";

        //Middlewares
        this.middlewares();

        //Rutas de mi app
        this.routes();
    }

    middlewares(){
        
        //CORS
        this.app.use( cors() );

        //Lectura y parseo del body
        this.app.use( express.json() );
        
        //Directorio public
        this.app.use( express.static("public") );
        
    }

    routes() {
        //Configuro el router en ese path
        this.app.use(this.usersPath, require("../routes/user.js"));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })
    }

}

module.exports = {
    Server
}
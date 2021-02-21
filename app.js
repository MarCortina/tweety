const express = require( 'express' );
const morgan = require('morgan'); //middleware application logger
const fs = require('fs');
const path = require('path')
const nunjucks = require( 'nunjucks' );
const routes = require('./routes')
const bodyParser = require('body-parser');


const app = express(); // crea una instancia de una aplicación de express
// El analizador de cuerpo de middleware extrae la parte completa del cuerpo de un flujo de solicitud entrante y lo expone en req.body
app.use(bodyParser.urlencoded({ extended: true }));


var accessLogStream = fs.createWriteStream(path.join(__dirname,'access.log'),{flags:'a'});
app.use(morgan('combined', {stream: accessLogStream}));
app.use(routes);


// // Configurando Nunjucks
app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views'); // apunta a nunjucks al directorio correcto para los templates
app.use(express.static('./public'))




app.listen(3000, function(){
    console.log('Estas escuhando en el puerto 3000')
});









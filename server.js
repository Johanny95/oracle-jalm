//server.js -> index.js -> routes.js
console.clear();
global.__baseDir = __dirname;
global.__dirDB = __baseDir + '/src/config/database/config.js';
global.__dirDBOracle = __baseDir + '/src/config/library/db.js';
global.__dirRoutes = __baseDir + '/src/config/routes';
global.__baseDirCtl = __baseDir + '/src/controllers/';
global.__baseDirModel = __baseDir + '/src/models/';
global.__baseDirClass = __baseDir + '/src/class/';

global.whitelist = ['http://panel.mispymes.cl', 
                    'http://gis.mispymes.cl',
                    'http://mif-manhattan'
]

//Validaciones express
const expressValidator = require('express-validator');

//express
const express = require('express');
const app = express();

//para leer los .env
require('dotenv').config();
//crea encabezados que protegen de los ataques (seguridad)
const bodyParser = require('body-parser')
//registra solicitudes
const morgan = require('morgan')

// permite / deshabilita la comunicación entre sitios
const cors = require('cors')
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))
//app.use(cors()) //vacio acepta todos


const helmet = require('helmet')
// convierte la respuesta en formato utilizable
app.use(helmet());

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit:50000 }));
//definir limite de archivos o entradas en nodejs
// Cualquier peticion pasa por auth.checkHeaders
//app.use("/",auth.checkHeaders)

const routes = require(__dirRoutes); //usa el index.js
app.use('/', routes);

//Si no existe en las variables de ambiente usa 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`app is running http://localhost:${PORT}/`)
})

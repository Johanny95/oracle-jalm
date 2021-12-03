const routes = require('express').Router()

routes.get('/', (req,res)=>{res.status(200).json(
	{messaje:'Estoy en el config/routes/index.js.',url: 'http://localhost:8080/' })})


routes.use('/oracle', require('./oracle')) // => http://localhost:8080/oracle
/*
	http://localhost:8080/              => {"messaje":"Estoy en el routes/index.js."}
	http://localhost:8080/oracle        => {"messaje":"Estoy en el modulos/crud/routesOracle.js"}
	http://localhost:8080/oracle/listar =>
*/

module.exports = routes;
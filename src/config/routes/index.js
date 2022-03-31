const routes = require('express').Router()
// const fs = require('fs');
routes.get('/', (req, res) => {
	res.status(200).json(
		{ messaje: 'Estoy en el config/routes/index.js.', url: 'http://localhost:8080/' })
})

routes.post('/test_api', (req, res) => {
	let date = new Date();
	var hora = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
	res.status(200).json({ messaje: 'json procesado bien', hora: hora });
	console.log(req.body);
})

routes.use('/oracle', require('./oracle')) // => http://localhost:8080/oracle
routes.use('/articulo', require('./articulo')) // => http://localhost:8080/articulo
/*
	http://localhost:8080/              => {"messaje":"Estoy en el routes/index.js."}
	http://localhost:8080/oracle        => {"messaje":"Estoy en el modulos/crud/routesOracle.js"}
	http://localhost:8080/oracle/listar =>
*/

module.exports = routes;
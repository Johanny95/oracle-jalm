const model = require(__baseDir + '/src/models/m_articulo');
const Articulo = require(__baseDirClass + '/Articulo.js');

const getListArticulos    = (req, res) =>  { model.getListArticulos( req, res ) };


module.exports = {
    getListArticulos
}
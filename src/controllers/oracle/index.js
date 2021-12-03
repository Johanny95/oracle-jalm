const model = require(__baseDir + '/src/models/m_oracle')

const getListProveedores = (req, res) => model.getProveedores(req, res)
const getResumenOficina = (req, res) => model.getResumenOficina(req, res)

// const add = (req, res) => model.add(req, res)

module.exports = {
    getListProveedores,
    getResumenOficina
}

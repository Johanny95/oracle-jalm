const routes = require('express').Router()

const ctrl = require(__baseDirCtl+'/oracle')
const validate = require(__baseDir + '/src/controllers/oracle/validations')

routes.get('/', (req,res)=>{res.status(200).json({messaje:'Home'})})

/* test para provar logs */
routes.get('/listar/:id', validate.validatorId, ctrl.getListProveedores );
routes.get('/getResumenOficina', (req,res)=>{	ctrl.getResumenOficina(req, res)  });



module.exports = routes;
const routes = require('express').Router()
const ctrl = require(__baseDirCtl+'/oracle')

routes.get('/', (req,res)=>{res.status(200).json({messaje:'Home'})})
routes.get('/listar', (req,res)=>{	ctrl.getListProveedores(req, res)  });
routes.get('/getResumenOficina', (req,res)=>{	ctrl.getResumenOficina(req, res)  });





module.exports = routes;
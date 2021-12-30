const routes = require('express').Router()

const ctrl = require(__baseDirCtl+'/articulo')

routes.get('/list', (req,res) => { ctrl.getListArticulos(req, res)  });



module.exports = routes;
const { body, param, validationResult,check } = require('express-validator')


exports.validatorId = [
    param('id', 'Id es proveedor requerido').exists().isNumeric()
    ,
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            console.log(req.body)
            const values = req.body
            const validation = errors.array()
            return res.status(422).json({ validation: validation, values: values });
        } else next()
    }
];


exports.check_add = [
    // body().isArray(),
    check('proveedores.*.id', 'Ingrese un Id Valido').not().isEmpty().isNumeric(),
    check('proveedores.*.nombre', 'Ingrese una nombre').not().isEmpty(),
    check('proveedores.*.correo', 'Ingrese un correo valido').not().isEmpty().bail().isEmail(),
    check('proveedores.*.id_oficina', 'Ingrese una Oficina').not().isEmpty().isNumeric(),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            console.log(req.body, errors.array());
            const values = req.body;
            const validation = errors.array();
            return res.status(422).json({ validation: validation, values: values });
        } else next()
    }

]
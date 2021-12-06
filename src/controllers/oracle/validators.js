const { body, param, validationResult } = require('express-validator')


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
    body('nombre', 'Ingrese una nombre').not().isEmpty(),
    body('codigo', 'Ingrese una nombre').not().isEmpty(),
    body('correo', 'Ingrese un correo valido').not().isEmpty().bail().isEmail(),
    body('credencial', 'Ingrese una credencial').not().isEmpty(),
    body('departamento', 'Ingrese un departamento').not().isEmpty(),
    body('empresa', 'Ingrese una empresa').not().isEmpty(),
    body('gerencia', 'Ingrese una gerencia').not().isEmpty(),
    body('nombre_empresa', 'Ingrese el nombre de empresa').not().isEmpty(),
    body('id_area', 'Ingrese una área').not().isEmpty().isNumeric(),
    body('id_perfil', 'Ingrese un perfil').not().isEmpty().isNumeric(),
    body('id_casino', 'Ingrese un casino').not().isEmpty().isNumeric(),
    body('creado_por', 'Ingrese un creador').not().isEmpty().isNumeric(),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            console.log(req.body)
            const values = req.body
            const validation = errors.array()
            return res.status(422).json({ validation: validation, values: values });
        } else next()
    }
]
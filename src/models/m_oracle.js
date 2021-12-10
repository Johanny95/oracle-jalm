const dbConfig = require(__dirDB);
const db = require(__dirDBOracle);


const getProveedores = async (req, res) => {
    db.getResultCursor(
        dbConfig.ppferi,
        `begin PF_TR_TRANSPORTE_PROCESOS.SP_GET_MAILS( :p_id_proveedor, :p_cursor); end; `,
        {
            p_id_proveedor: req.params.id,
            p_cursor: { type: db.oracledb.CURSOR, dir: db.oracledb.BIND_OUT }
        },
        res
    )
}

const getResumenOficina = async (req, res) => {
    db.getResultCursor(
        dbConfig.pftest,
        `begin PF_SFLOTA_TRANSPORTE.SP_GET_RESUMEN_OFICINA(:p_cursor); end; `,
        {
            p_cursor: { type: db.oracledb.CURSOR, dir: db.oracledb.BIND_OUT }
        },
        res
    )
}

const add = async (req, res) => {
    db.execProcedure(
        dbConfig.ppferi,
        // `BEGIN PF_TR_TRANSPORTE_PROCESOS.sp_add_proveedor_wms(:p_id_vendor, :p_nombre, :p_correo, :p_id_oficina, :p_proceso); END;`,
        `BEGIN PF_TR_TRANSPORTE_PROCESOS.sp_add_proveedor_wms(:p_id_vendor, :p_nombre, :p_correo, :p_id_oficina); END;`,
        {
            p_id_vendor: { val: req.body.id, dir: db.oracledb.BIND_IN },
            p_nombre: { val: req.body.nombre, dir: db.oracledb.BIND_IN },
            p_correo: { val: req.body.correo, dir: db.oracledb.BIND_IN },
            p_id_oficina: { val: req.body.id_oficina, dir: db.oracledb.BIND_IN }
            // ,p_proceso:      { type: db.oracledb.NUMBER, dir: db.oracledb.BIND_OUT }
        },
        res)
}

const addMany = async (req, res) => {
    // const procedure = `BEGIN PF_TR_TRANSPORTE_PROCESOS.sp_add_proveedor_wms(:id, :nombre, :correo, :id_oficina); END;`
    const procedure = `INSERT INTO pf_wms_proveedor values (:id, :nombre, :correo, :id_oficina)`
    const binds = req.body.proveedores; //JSON.parse(req.body.proveedores); //en el caso que sea un archivo plano con json
    const options = {
        autoCommit: true,
        batchErrors: true,
        bindDefs: {
            id: { type: db.oracledb.NUMBER },
            nombre: { type: db.oracledb.STRING, maxSize: 255 },
            correo: { type: db.oracledb.STRING, maxSize: 255 },
            id_oficina: { type: db.oracledb.NUMBER }
        }
    };
    db.execMany(
        dbConfig.ppferi,
        procedure,
        binds,
        options,
        res
    );
}


module.exports = {
    getProveedores,
    getResumenOficina,
    addMany,
    add
};
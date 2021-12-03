const dbConfig = require(__dirDB);
const db = require(__dirDBOracle);


const getProveedores = async (req, res) => {
    db.getResultCursor(
        dbConfig.ppferi,
        `begin sasdasdasddasPF_TR_TRANSPORTE_PROCESOS.SP_GET_MAILS( :p_id_proveedor, :p_cursor); end; `,
        {   p_id_proveedor  : 1014404,
            p_cursor        : { type: db.oracledb.CURSOR, dir: db.oracledb.BIND_OUT }
        },
        res
        )
}

const getResumenOficina = async (req, res) => {
    db.getResultCursor(
        dbConfig.pftest,
        `begin PF_SFLOTA_TRANSPORTE.SP_GET_RESUMEN_OFICINA(:p_cursor); end; `,
        {   
            p_cursor        : { type: db.oracledb.CURSOR, dir: db.oracledb.BIND_OUT }
        },
        res
        )
}




module.exports = {
    getProveedores,
    getResumenOficina
};
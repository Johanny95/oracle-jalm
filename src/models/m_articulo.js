const dbConfig = require(__dirDB);
const db = require(__dirDBOracle);

checkEnviado = async (req, res) => {
    db.execProcedure(
        dbConfig.ppferi,
        `update PF_WMS_ARTICULOS_MANH 
         set estado_proceso = 'P',
             fecha_envio    = sysdate
         where codigo_producto = :codigo_producto `,
        [
            req.articulo.getItem()
        ],
        res)
}

getListArticulos = async (req, res) => {
    db.getResultCursor(
        dbConfig.ppferi,
        `begin PF_WMS_INTEGRACION_MANHATAN.GET_ARTICULOS(:p_cursor); end; `,
        {
            p_cursor: { type: db.oracledb.CURSOR, dir: db.oracledb.BIND_OUT }
        },
        res);
        // console.log(res);
}

getListCategorias = async (req, res) => {
    db.getResultCursor(
        dbConfig.ppferi,
        `begin PF_WMS_INTEGRACION_MANHATAN.GET_CATEGORIAS_ARTICULO( :p_codigo_producto, :p_cursor); end; `,
        {
            p_codigo_producto: req.articulo.getInventory_item_id(),
            p_cursor: { type: db.oracledb.CURSOR, dir: db.oracledb.BIND_OUT }
        },
        res);


    
}

getListCrossreferences = async (req, res) => {
    db.getResultCursor(
        dbConfig.ppferi,
        `begin PF_WMS_INTEGRACION_MANHATAN.GET_CROSSREFERENCES( :p_codigo_producto, :p_cursor); end; `,
        {
            p_codigo_producto: req.articulo.getInventory_item_id(),
            p_cursor: { type: db.oracledb.CURSOR, dir: db.oracledb.BIND_OUT }
        },
        res
    );
}

getListPacking = async (req, res) => {
    db.getResultCursor(
        dbConfig.ppferi,
        `begin PF_WMS_INTEGRACION_MANHATAN.GET_PACKING( :p_codigo_producto, :p_cursor); end; `,
        {
            p_codigo_producto: req.articulo.getInventory_item_id(),
            p_cursor: { type: db.oracledb.CURSOR, dir: db.oracledb.BIND_OUT }
        },
        res
    );
}


getListOrganizations = async (req, res) => {
    db.getResultCursor(
        dbConfig.ppferi,
        `begin PF_WMS_INTEGRACION_MANHATAN.GET_ORGANIZACIONES( :p_codigo_producto, :p_cursor); end; `,
        {
            p_codigo_producto: req.articulo.getInventory_item_id(),
            p_cursor: { type: db.oracledb.CURSOR, dir: db.oracledb.BIND_OUT }
        },
        res
    );
}

getListBarcodes = async (req, res) => {
    db.getResultCursor(
        dbConfig.ppferi,
        `begin PF_WMS_INTEGRACION_MANHATAN.GET_BARCODES( :p_codigo_producto, :p_cursor); end; `,
        {
            p_codigo_producto: req.articulo.getInventory_item_id(),
            p_cursor: { type: db.oracledb.CURSOR, dir: db.oracledb.BIND_OUT }
        },
        res
    );
}



module.exports = {
    checkEnviado,
    getListArticulos,
    getListCategorias,
    getListCrossreferences
};
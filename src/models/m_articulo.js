const dbConfig = require(__dirDB);


checkEnviado = async (req, res) => {
    execProcedure(
        dbConfig.ppferi,
        `update PF_WMS_ARTICULOS_MANH 
         set estado_proceso = 'P',
             fecha_envio    = sysdate
         where codigo_producto = :codigo_producto `,
        [
            req.articulo.codigo_producto
        ],
        res)
}

getListArticulos = async (req, res ) => {
    getResultCursor(
        dbConfig.ppferi,
        `begin PF_WMS_INTEGRACION_MANHATAN.GET_ARTICUKLOS(  :p_cursor); end; `,
        {
            p_cursor: { type: db.oracledb.CURSOR, dir: db.oracledb.BIND_OUT }
        },
        res);
}

getListCategorias = async (req, res ) => {
    getResultCursor(
        dbConfig.ppferi,
        `begin PF_WMS_INTEGRACION_MANHATAN.GET_CATEGORIAS_ARTICULO( :p_codigo_producto, :p_cursor); end; `,
        {   p_codigo_producto: req.articulo.codigo_producto,
            p_cursor: { type: db.oracledb.CURSOR, dir: db.oracledb.BIND_OUT }
        },
        res);
}

getListCrossreferences = async (req, res ) => {
    getResultCursor(
        dbConfig.ppferi,
        `begin PF_WMS_INTEGRACION_MANHATAN.GET_CROSSREFERENCES( :p_codigo_producto, :p_cursor); end; `,
        {   p_codigo_producto: req.articulo.codigo_producto,
            p_cursor: { type: db.oracledb.CURSOR, dir: db.oracledb.BIND_OUT }
        },
        res
        );
}

getListPacking = async (req, res ) => {
    getResultCursor(
        dbConfig.ppferi,
        `begin PF_WMS_INTEGRACION_MANHATAN.GET_PACKING( :p_codigo_producto, :p_cursor); end; `,
        {   p_codigo_producto: req.articulo.codigo_producto,
            p_cursor: { type: db.oracledb.CURSOR, dir: db.oracledb.BIND_OUT }
        },
        res
        );
}


getListOrganizations = async (req, res ) => {
    getResultCursor(
        dbConfig.ppferi,
        `begin PF_WMS_INTEGRACION_MANHATAN.GET_ORGANIZACIONES( :p_codigo_producto, :p_cursor); end; `,
        {   p_codigo_producto: req.articulo.codigo_producto,
            p_cursor: { type: db.oracledb.CURSOR, dir: db.oracledb.BIND_OUT }
        },
        res
        );
}

getListBarcodes = async (req, res ) => {
    getResultCursor(
        dbConfig.ppferi,
        `begin PF_WMS_INTEGRACION_MANHATAN.GET_BARCODES( :p_codigo_producto, :p_cursor); end; `,
        {   p_codigo_producto: req.articulo.codigo_producto,
            p_cursor: { type: db.oracledb.CURSOR, dir: db.oracledb.BIND_OUT }
        },
        res
        );
}




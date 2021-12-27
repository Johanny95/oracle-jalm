
class Articulo {

    constructor(
        inventory_item_id,
        item,
        description_item,
        fijo_variable,
        ump,
        ums,
        conversion,
        litros_por_pallet,
        kgs_por_und,
        kgs_por_pallet,
        altura_pallet,
        cajas_por_camada,
        camadas_por_pallet,
        litros_por_und,
        planta_origen,
        tipo_caja_pf,
        und_por_jaba,
        unidades_por_pallet,
        dun_14,
        ean_13,
        categoria,
        tipo_articulo,
        linea,
        familia,
        subfamilia,
        estado,
        marca,
        flag_caj_n,
        factor_desv_mas,
        fact_desv_menos,
        toler_env_excesivo,
        toler_env_menos,
        tara_bulto,
        peso_unitario,
        cant_max_contenedor,
        dias_vencimiento,
        prioridad,
        activa_restriccion,
        sub_pick_exclusivo,
        largo,
        alto,
        ancho,
        activo_inactivo,
        producto_pf,
        abast_standar,
        estado_proceso,
        fecha_envio,
        v_atributte1,
        v_atributte2,
        v_atributte3,
        v_atributte4,
        v_atributte5,
        v_atributte6,
        v_atributte7,
        v_atributte8,
        v_atributte9,
        v_atributte10,
        v_atributte11,
        v_atributte12,
        v_atributte13,
        v_atributte14,
        v_atributte15,
        n_atributte1,
        n_atributte2,
        n_atributte3,
        n_atributte4,
        n_atributte5,
        n_atributte6,
        n_atributte7,
        n_atributte8,
        n_atributte9,
        n_atributte10,
        n_atributte11,
        n_atributte12,
        n_atributte13,
        n_atributte14,
        n_atributte15,
        d_atributte1,
        d_atributte2,
        d_atributte3,
        d_atributte4,
        d_atributte5,
        creation_date,
        created_by,
        update_date,
        updated_by,
        deleted_date,
        deleted_by,
        last_update_date,
        //elementos de lista o arrays para valores multiples en json
        categorias,
        cross_references,
        packing,
        organizations,
        bar_codes
        ) {
            this.inventory_item_id          = inventory_item_id,
            this.item                       = item,
            this.description_item           = description_item,
            this.fijo_variable              = fijo_variable,
            this.ump                        = ump,
            this.ums                        = ums,
            this.conversion                 = conversion,
            this.litros_por_pallet          = litros_por_pallet,
            this.kgs_por_und                = kgs_por_und,
            this.kgs_por_pallet             = kgs_por_pallet,
            this.altura_pallet              = altura_pallet,
            this.cajas_por_camada           = cajas_por_camada,
            this.camadas_por_pallet         = camadas_por_pallet,
            this.litros_por_und             = litros_por_und,
            this.planta_origen              = planta_origen,
            this.tipo_caja_pf               = tipo_caja_pf,
            this.und_por_jaba               = und_por_jaba,
            this.unidades_por_pallet        = unidades_por_pallet,
            this.dun_14                     = dun_14,
            this.ean_13                     = ean_13,
            this.categoria                  = categoria,
            this.tipo_articulo              = tipo_articulo,
            this.linea                      = linea,
            this.familia                    = familia,
            this.subfamilia                 = subfamilia,
            this.estado                     = estado,
            this.marca                      = marca,
            this.flag_caj_n                 = flag_caj_n,
            this.factor_desv_mas            = factor_desv_mas,
            this.fact_desv_menos            = fact_desv_menos,
            this.toler_env_excesivo         = toler_env_excesivo,
            this.toler_env_menos            = toler_env_menos,
            this.tara_bulto                 = tara_bulto,
            this.peso_unitario              = peso_unitario,
            this.cant_max_contenedor        = cant_max_contenedor,
            this.dias_vencimiento           = dias_vencimiento,
            this.prioridad                  = prioridad,
            this.activa_restriccion         = activa_restriccion,
            this.sub_pick_exclusivo         = sub_pick_exclusivo,
            this.largo                      = largo,
            this.alto                       = alto,
            this.ancho                      = ancho,
            this.activo_inactivo            = activo_inactivo,
            this.producto_pf                = producto_pf,
            this.abast_standar              = abast_standar,
            this.estado_proceso             = estado_proceso,
            this.fecha_envio                = fecha_envio,
            this.v_atributte1               = v_atributte1,
            this.v_atributte2               = v_atributte2,
            this.v_atributte3               = v_atributte3,
            this.v_atributte4               = v_atributte4,
            this.v_atributte5               = v_atributte5,
            this.v_atributte6               = v_atributte6,
            this.v_atributte7               = v_atributte7,
            this.v_atributte8               = v_atributte8,
            this.v_atributte9               = v_atributte9,
            this.v_atributte10              = v_atributte10,
            this.v_atributte11              = v_atributte11,
            this.v_atributte12              = v_atributte12,
            this.v_atributte13              = v_atributte13,
            this.v_atributte14              = v_atributte14,
            this.v_atributte15              = v_atributte15,
            this.n_atributte1               = n_atributte1,
            this.n_atributte2               = n_atributte2,
            this.n_atributte3               = n_atributte3,
            this.n_atributte4               = n_atributte4,
            this.n_atributte5               = n_atributte5,
            this.n_atributte6               = n_atributte6,
            this.n_atributte7               = n_atributte7,
            this.n_atributte8               = n_atributte8,
            this.n_atributte9               = n_atributte9,
            this.n_atributte10              = n_atributte10,
            this.n_atributte11              = n_atributte11,
            this.n_atributte12              = n_atributte12,
            this.n_atributte13              = n_atributte13,
            this.n_atributte14              = n_atributte14,
            this.n_atributte15              = n_atributte15,
            this.d_atributte1               = d_atributte1,
            this.d_atributte2               = d_atributte2,
            this.d_atributte3               = d_atributte3,
            this.d_atributte4               = d_atributte4,
            this.d_atributte5               = d_atributte5,
            this.creation_date              = creation_date,
            this.created_by                 = created_by,
            this.update_date                = update_date,
            this.updated_by                 = updated_by,
            this.deleted_date               = deleted_date,
            this.deleted_by                 = deleted_by,
            this.last_update_date           = last_update_date,
            //objetos de elementos
            this.categorias         = categorias;
            this.cross_references   = cross_references;
            this.packing            = packing;
            this.organizations      = organizations;
            this.bar_codes          = bar_codes;
    }

    setProperties(element) {
        this.inventory_item_id          = element.inventory_item_id,
        this.item                       = element.item,
        this.description_item           = element.description_item,
        this.fijo_variable              = element.fijo_variable,
        this.ump                        = element.ump,
        this.ums                        = element.ums,
        this.conversion                 = element.conversion,
        this.litros_por_pallet          = element.litros_por_pallet,
        this.kgs_por_und                = element.kgs_por_und,
        this.kgs_por_pallet             = element.kgs_por_pallet,
        this.altura_pallet              = element.altura_pallet,
        this.cajas_por_camada           = element.cajas_por_camada,
        this.camadas_por_pallet         = element.camadas_por_pallet,
        this.litros_por_und             = element.litros_por_und,
        this.planta_origen              = element.planta_origen,
        this.tipo_caja_pf               = element.tipo_caja_pf,
        this.und_por_jaba               = element.und_por_jaba,
        this.unidades_por_pallet        = element.unidades_por_pallet,
        this.dun_14                     = element.dun_14,
        this.ean_13                     = element.ean_13,
        this.categoria                  = element.categoria,
        this.tipo_articulo              = element.tipo_articulo,
        this.linea                      = element.linea,
        this.familia                    = element.familia,
        this.subfamilia                 = element.subfamilia,
        this.estado                     = element.estado,
        this.marca                      = element.marca,
        this.flag_caj_n                 = element.flag_caj_n,
        this.factor_desv_mas            = element.factor_desv_mas,
        this.fact_desv_menos            = element.fact_desv_menos,
        this.toler_env_excesivo         = element.toler_env_excesivo,
        this.toler_env_menos            = element.toler_env_menos,
        this.tara_bulto                 = element.tara_bulto,
        this.peso_unitario              = element.peso_unitario,
        this.cant_max_contenedor        = element.cant_max_contenedor,
        this.dias_vencimiento           = element.dias_vencimiento,
        this.prioridad                  = element.prioridad,
        this.activa_restriccion         = element.activa_restriccion,
        this.sub_pick_exclusivo         = element.sub_pick_exclusivo,
        this.largo                      = element.largo,
        this.alto                       = element.alto,
        this.ancho                      = element.ancho,
        this.activo_inactivo            = element.activo_inactivo,
        this.producto_pf                = element.producto_pf,
        this.abast_standar              = element.abast_standar,
        this.estado_proceso             = element.estado_proceso,
        this.fecha_envio                = element.fecha_envio,
        this.v_atributte1               = element.v_atributte1,
        this.v_atributte2               = element.v_atributte2,
        this.v_atributte3               = element.v_atributte3,
        this.v_atributte4               = element.v_atributte4,
        this.v_atributte5               = element.v_atributte5,
        this.v_atributte6               = element.v_atributte6,
        this.v_atributte7               = element.v_atributte7,
        this.v_atributte8               = element.v_atributte8,
        this.v_atributte9               = element.v_atributte9,
        this.v_atributte10              = element.v_atributte10,
        this.v_atributte11              = element.v_atributte11,
        this.v_atributte12              = element.v_atributte12,
        this.v_atributte13              = element.v_atributte13,
        this.v_atributte14              = element.v_atributte14,
        this.v_atributte15              = element.v_atributte15,
        this.n_atributte1               = element.n_atributte1,
        this.n_atributte2               = element.n_atributte2,
        this.n_atributte3               = element.n_atributte3,
        this.n_atributte4               = element.n_atributte4,
        this.n_atributte5               = element.n_atributte5,
        this.n_atributte6               = element.n_atributte6,
        this.n_atributte7               = element.n_atributte7,
        this.n_atributte8               = element.n_atributte8,
        this.n_atributte9               = element.n_atributte9,
        this.n_atributte10              = element.n_atributte10,
        this.n_atributte11              = element.n_atributte11,
        this.n_atributte12              = element.n_atributte12,
        this.n_atributte13              = element.n_atributte13,
        this.n_atributte14              = element.n_atributte14,
        this.n_atributte15              = element.n_atributte15,
        this.d_atributte1               = element.d_atributte1,
        this.d_atributte2               = element.d_atributte2,
        this.d_atributte3               = element.d_atributte3,
        this.d_atributte4               = element.d_atributte4,
        this.d_atributte5               = element.d_atributte5,
        this.creation_date              = element.creation_date,
        this.created_by                 = element.created_by,
        this.update_date                = element.update_date,
        this.updated_by                 = element.updated_by,
        this.deleted_date               = element.deleted_date,
        this.deleted_by                 = element.deleted_by,
        this.last_update_date           = element.last_update_date,
        //arrays
        this.categorias                 = categorias;
        this.cross_references           = cross_references;
        this.packs                      = packs;
        this.organizations              = organizations;
        this.bar_codes                  = bar_codes;
    }

    getInventory_item_id(){
        return this.inventory_item_id;
    }
    getItem(){
        return this.item;
    }
    getDescription_item(){
        return this.description_item;
    }
    getFijo_variable(){
        return this.fijo_variable;
    }
    getUmp(){
        return this.ump;
    }
    getUms(){
        return this.ums;
    }
    getConversion(){
        return this.conversion;
    }
    getLitros_por_pallet(){
        return this.litros_por_pallet;
    }
    getKgs_por_und(){
        return this.kgs_por_und;
    }
    getKgs_por_pallet(){
        return this.kgs_por_pallet;
    }
    getAltura_pallet(){
        return this.altura_pallet;
    }
    getCajas_por_camada(){
        return this.cajas_por_camada;
    }
    getCamadas_por_pallet(){
        return this.camadas_por_pallet;
    }
    getLitros_por_und(){
        return this.litros_por_und;
    }
    getPlanta_origen(){
        return this.planta_origen;
    }
    getTipo_caja_pf(){
        return this.tipo_caja_pf;
    }
    getUnd_por_jaba(){
        return this.und_por_jaba;
    }
    getUnidades_por_pallet(){
        return this.unidades_por_pallet;
    }
    getDun_14(){
        return this.dun_14;
    }
    getEan_13(){
        return this.ean_13;
    }
    getCategoria(){
        return this.categoria;
    }
    getTipo_articulo(){
        return this.tipo_articulo;
    }
    getLinea(){
        return this.linea;
    }
    getFamilia(){
        return this.familia;
    }
    getSubfamilia(){
        return this.subfamilia;
    }
    getEstado(){
        return this.estado;
    }
    getMarca(){
        return this.marca;
    }
    getFlag_caj_n(){
        return this.flag_caj_n;
    }
    getFactor_desv_mas(){
        return this.factor_desv_mas;
    }
    getFact_desv_menos(){
        return this.fact_desv_menos;
    }
    getToler_env_excesivo(){
        return this.toler_env_excesivo;
    }
    getToler_env_menos(){
        return this.toler_env_menos;
    }
    getTara_bulto(){
        return this.tara_bulto;
    }
    getPeso_unitario(){
        return this.peso_unitario;
    }
    getCant_max_contenedor(){
        return this.cant_max_contenedor;
    }
    getDias_vencimiento(){
        return this.dias_vencimiento;
    }
    getPrioridad(){
        return this.prioridad;
    }
    getActiva_restriccion(){
        return this.activa_restriccion;
    }
    getSub_pick_exclusivo(){
        return this.sub_pick_exclusivo;
    }
    getLargo(){
        return this.largo;
    }
    getAlto(){
        return this.alto;
    }
    getAncho(){
        return this.ancho;
    }
    getActivo_inactivo(){
        return this.activo_inactivo;
    }
    getProducto_pf(){
        return this.producto_pf;
    }
    getAbast_standar(){
        return this.abast_standar;
    }
    getEstado_proceso(){
        return this.estado_proceso;
    }
    getFecha_envio(){
        return this.fecha_envio;
    }
    getV_atributte1(){
        return this.v_atributte1;
    }
    getV_atributte2(){
        return this.v_atributte2;
    }
    getV_atributte3(){
        return this.v_atributte3;
    }
    getV_atributte4(){
        return this.v_atributte4;
    }
    getV_atributte5(){
        return this.v_atributte5;
    }
    getV_atributte6(){
        return this.v_atributte6;
    }
    getV_atributte7(){
        return this.v_atributte7;
    }
    getV_atributte8(){
        return this.v_atributte8;
    }
    getV_atributte9(){
        return this.v_atributte9;
    }
    getV_atributte10(){
        return this.v_atributte10;
    }
    getV_atributte11(){
        return this.v_atributte11;
    }
    getV_atributte12(){
        return this.v_atributte12;
    }
    getV_atributte13(){
        return this.v_atributte13;
    }
    getV_atributte14(){
        return this.v_atributte14;
    }
    getV_atributte15(){
        return this.v_atributte15;
    }
    getN_atributte1(){
        return this.n_atributte1;
    }
    getN_atributte2(){
        return this.n_atributte2;
    }
    getN_atributte3(){
        return this.n_atributte3;
    }
    getN_atributte4(){
        return this.n_atributte4;
    }
    getN_atributte5(){
        return this.n_atributte5;
    }
    getN_atributte6(){
        return this.n_atributte6;
    }
    getN_atributte7(){
        return this.n_atributte7;
    }
    getN_atributte8(){
        return this.n_atributte8;
    }
    getN_atributte9(){
        return this.n_atributte9;
    }
    getN_atributte10(){
        return this.n_atributte10;
    }
    getN_atributte11(){
        return this.n_atributte11;
    }
    getN_atributte12(){
        return this.n_atributte12;
    }
    getN_atributte13(){
        return this.n_atributte13;
    }
    getN_atributte14(){
        return this.n_atributte14;
    }
    getN_atributte15(){
        return this.n_atributte15;
    }
    getD_atributte1(){
        return this.d_atributte1;
    }
    getD_atributte2(){
        return this.d_atributte2;
    }
    getD_atributte3(){
        return this.d_atributte3;
    }
    getD_atributte4(){
        return this.d_atributte4;
    }
    getD_atributte5(){
        return this.d_atributte5;
    }
    getCreation_date(){
        return this.creation_date;
    }
    getCreated_by(){
        return this.created_by;
    }
    getUpdate_date(){
        return this.update_date;
    }
    getUpdated_by(){
        return this.updated_by;
    }
    getDeleted_date(){
        return this.deleted_date;
    }
    getDeleted_by(){
        return this.deleted_by;
    }
    getLast_update_date(){
        return this.last_update_date;
    }
    
    setInventory_item_id(inventory_item_id){
        this.inventory_item_id = inventory_item_id;
    }
    setItem(item){
        this.item = item;
    }
    setDescription_item(description_item){
        this.description_item = description_item;
    }
    setFijo_variable(fijo_variable){
        this.fijo_variable = fijo_variable;
    }
    setUmp(ump){
        this.ump = ump;
    }
    setUms(ums){
        this.ums = ums;
    }
    setConversion(conversion){
        this.conversion = conversion;
    }
    setLitros_por_pallet(litros_por_pallet){
        this.litros_por_pallet = litros_por_pallet;
    }
    setKgs_por_und(kgs_por_und){
        this.kgs_por_und = kgs_por_und;
    }
    setKgs_por_pallet(kgs_por_pallet){
        this.kgs_por_pallet = kgs_por_pallet;
    }
    setAltura_pallet(altura_pallet){
        this.altura_pallet = altura_pallet;
    }
    setCajas_por_camada(cajas_por_camada){
        this.cajas_por_camada = cajas_por_camada;
    }
    setCamadas_por_pallet(camadas_por_pallet){
        this.camadas_por_pallet = camadas_por_pallet;
    }
    setLitros_por_und(litros_por_und){
        this.litros_por_und = litros_por_und;
    }
    setPlanta_origen(planta_origen){
        this.planta_origen = planta_origen;
    }
    setTipo_caja_pf(tipo_caja_pf){
        this.tipo_caja_pf = tipo_caja_pf;
    }
    setUnd_por_jaba(und_por_jaba){
        this.und_por_jaba = und_por_jaba;
    }
    setUnidades_por_pallet(unidades_por_pallet){
        this.unidades_por_pallet = unidades_por_pallet;
    }
    setDun_14(dun_14){
        this.dun_14 = dun_14;
    }
    setEan_13(ean_13){
        this.ean_13 = ean_13;
    }
    setCategoria(categoria){
        this.categoria = categoria;
    }
    setTipo_articulo(tipo_articulo){
        this.tipo_articulo = tipo_articulo;
    }
    setLinea(linea){
        this.linea = linea;
    }
    setFamilia(familia){
        this.familia = familia;
    }
    setSubfamilia(subfamilia){
        this.subfamilia = subfamilia;
    }
    setEstado(estado){
        this.estado = estado;
    }
    setMarca(marca){
        this.marca = marca;
    }
    setFlag_caj_n(flag_caj_n){
        this.flag_caj_n = flag_caj_n;
    }
    setFactor_desv_mas(factor_desv_mas){
        this.factor_desv_mas = factor_desv_mas;
    }
    setFact_desv_menos(fact_desv_menos){
        this.fact_desv_menos = fact_desv_menos;
    }
    setToler_env_excesivo(toler_env_excesivo){
        this.toler_env_excesivo = toler_env_excesivo;
    }
    setToler_env_menos(toler_env_menos){
        this.toler_env_menos = toler_env_menos;
    }
    setTara_bulto(tara_bulto){
        this.tara_bulto = tara_bulto;
    }
    setPeso_unitario(peso_unitario){
        this.peso_unitario = peso_unitario;
    }
    setCant_max_contenedor(cant_max_contenedor){
        this.cant_max_contenedor = cant_max_contenedor;
    }
    setDias_vencimiento(dias_vencimiento){
        this.dias_vencimiento = dias_vencimiento;
    }
    setPrioridad(prioridad){
        this.prioridad = prioridad;
    }
    setActiva_restriccion(activa_restriccion){
        this.activa_restriccion = activa_restriccion;
    }
    setSub_pick_exclusivo(sub_pick_exclusivo){
        this.sub_pick_exclusivo = sub_pick_exclusivo;
    }
    setLargo(largo){
        this.largo = largo;
    }
    setAlto(alto){
        this.alto = alto;
    }
    setAncho(ancho){
        this.ancho = ancho;
    }
    setActivo_inactivo(activo_inactivo){
        this.activo_inactivo = activo_inactivo;
    }
    setProducto_pf(producto_pf){
        this.producto_pf = producto_pf;
    }
    setAbast_standar(abast_standar){
        this.abast_standar = abast_standar;
    }
    setEstado_proceso(estado_proceso){
        this.estado_proceso = estado_proceso;
    }
    setFecha_envio(fecha_envio){
        this.fecha_envio = fecha_envio;
    }
    setV_atributte1(v_atributte1){
        this.v_atributte1 = v_atributte1;
    }
    setV_atributte2(v_atributte2){
        this.v_atributte2 = v_atributte2;
    }
    setV_atributte3(v_atributte3){
        this.v_atributte3 = v_atributte3;
    }
    setV_atributte4(v_atributte4){
        this.v_atributte4 = v_atributte4;
    }
    setV_atributte5(v_atributte5){
        this.v_atributte5 = v_atributte5;
    }
    setV_atributte6(v_atributte6){
        this.v_atributte6 = v_atributte6;
    }
    setV_atributte7(v_atributte7){
        this.v_atributte7 = v_atributte7;
    }
    setV_atributte8(v_atributte8){
        this.v_atributte8 = v_atributte8;
    }
    setV_atributte9(v_atributte9){
        this.v_atributte9 = v_atributte9;
    }
    setV_atributte10(v_atributte10){
        this.v_atributte10 = v_atributte10;
    }
    setV_atributte11(v_atributte11){
        this.v_atributte11 = v_atributte11;
    }
    setV_atributte12(v_atributte12){
        this.v_atributte12 = v_atributte12;
    }
    setV_atributte13(v_atributte13){
        this.v_atributte13 = v_atributte13;
    }
    setV_atributte14(v_atributte14){
        this.v_atributte14 = v_atributte14;
    }
    setV_atributte15(v_atributte15){
        this.v_atributte15 = v_atributte15;
    }
    setN_atributte1(n_atributte1){
        this.n_atributte1 = n_atributte1;
    }
    setN_atributte2(n_atributte2){
        this.n_atributte2 = n_atributte2;
    }
    setN_atributte3(n_atributte3){
        this.n_atributte3 = n_atributte3;
    }
    setN_atributte4(n_atributte4){
        this.n_atributte4 = n_atributte4;
    }
    setN_atributte5(n_atributte5){
        this.n_atributte5 = n_atributte5;
    }
    setN_atributte6(n_atributte6){
        this.n_atributte6 = n_atributte6;
    }
    setN_atributte7(n_atributte7){
        this.n_atributte7 = n_atributte7;
    }
    setN_atributte8(n_atributte8){
        this.n_atributte8 = n_atributte8;
    }
    setN_atributte9(n_atributte9){
        this.n_atributte9 = n_atributte9;
    }
    setN_atributte10(n_atributte10){
        this.n_atributte10 = n_atributte10;
    }
    setN_atributte11(n_atributte11){
        this.n_atributte11 = n_atributte11;
    }
    setN_atributte12(n_atributte12){
        this.n_atributte12 = n_atributte12;
    }
    setN_atributte13(n_atributte13){
        this.n_atributte13 = n_atributte13;
    }
    setN_atributte14(n_atributte14){
        this.n_atributte14 = n_atributte14;
    }
    setN_atributte15(n_atributte15){
        this.n_atributte15 = n_atributte15;
    }
    setD_atributte1(d_atributte1){
        this.d_atributte1 = d_atributte1;
    }
    setD_atributte2(d_atributte2){
        this.d_atributte2 = d_atributte2;
    }
    setD_atributte3(d_atributte3){
        this.d_atributte3 = d_atributte3;
    }
    setD_atributte4(d_atributte4){
        this.d_atributte4 = d_atributte4;
    }
    setD_atributte5(d_atributte5){
        this.d_atributte5 = d_atributte5;
    }
    setCreation_date(creation_date){
        this.creation_date = creation_date;
    }
    setCreated_by(created_by){
        this.created_by = created_by;
    }
    setUpdate_date(update_date){
        this.update_date = update_date;
    }
    setUpdated_by(updated_by){
        this.updated_by = updated_by;
    }
    setDeleted_date(deleted_date){
        this.deleted_date = deleted_date;
    }
    setDeleted_by(deleted_by){
        this.deleted_by = deleted_by;
    }
    setLast_update_date(last_update_date){
        this.last_update_date = last_update_date;
    }
    


}
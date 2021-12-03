const oracledb = require('oracledb');
const dbConfig = require(__dirDB);

class Log {
    constructor(type, process, user, error) {
        this.type = type;
        this.process = process;
        this.user = user;
        this.error = error;
    }
    getType() {
        return this.type;
    }
    getProcess() {
        return this.process;
    }
    getUser() {
        return this.user;
    }
    getError() {
        return this.error;
    }
    setType(type) {
        this.type = type;
    }
    setProcess(process) {
        this.process = process;
    }
    setUser(user) {
        this.user = user;
    }
    setError(error) {
        this.error = error;
    }
    setProperties(element){
        this.type = element.type;
        this.process =  element.process;
        this.user =  element.user;
        this.error =  element.error;
    };
    save = async ( res) => {
        execProcedure(
            dbConfig.ppferi,
            `BEGIN pf_debug_log_pkg.debug_log(:p_type, :p_user, :p_proceso, :p_error); END;`,
            {
                p_type: { val: this.type, dir: oracledb.BIND_IN },
                p_user: { val: this.user, dir: oracledb.BIND_IN },
                p_proceso: { val: this.process, dir: oracledb.BIND_IN },
                p_error: { val: this.error, dir: oracledb.BIND_IN }
            },
            res)
    }

}


//se declara proceso para registrar logs mediante procedimiento de almacenado
const execProcedure = async (database, statement, bind, res) => {
    connection = await oracledb.getConnection(database);
    connection.execute(statement, bind, { outFormat: oracledb.OUT_FORMAT_OBJECT }, (err, result) => {
        if (err) {
            res.status(200).json({ message: 'Error listar query ', error: err + "JJ" })
            console.error(err)
        } else {
            res.json(result.rows)
        }
        if (connection) {
            try {
                connection.close()
            } catch (error) {
                res.status(200).json({ message: 'Error desconectar query ', error: err + "JJ" })
                console.error(err)
            }
        }
    })
}

module.exports = Log;
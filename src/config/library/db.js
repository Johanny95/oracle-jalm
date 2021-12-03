const Log = require(__baseDirClass + '/Log.js')
const oracledb = require('oracledb')
const dbConfig = require(__dirDB);

let conn


const getResultCursor = async (database, statement, binds, res) => {
  let log = new Log();
  conn = await oracledb.getConnection(database); // se conecta a la base de datos enviada como parametro
  conn.execute(statement, binds, { outFormat: oracledb.OUT_FORMAT_OBJECT }, (err, result) => {
    if (err) {
      log.setProperties({user: 1099,process: statement,type: 'ERROR',error: err + ", DataBase:" + database.connectString});
      res.status(200).json(log.save(res));
      // res.status(200).json({ message: 'Error sentencia cursor ', error: err + ", DataBase:" + database.connectString })
      // console.error(err);
    } else {
      const resultSet = result.outBinds.p_cursor
      resultSet.getRows().then(rows => {
        res.status(200).json({ data: rows })
      })
    }
    if (conn) {
      try {
        conn.close()
      } catch (error) {
        res.status(200).json({ message: 'Error sentencia cursor ', error: err + "JJ" })
        console.error(err)
      }
    }
  })

}

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

module.exports = {
  getResultCursor,
  execProcedure,
  oracledb,
  dbConfig
}
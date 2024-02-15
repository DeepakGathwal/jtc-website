const mysql  = require('mysql')

/** call database */
const db = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: "",
  database:  process.env.database,
});

/** database connection for all Api's */
exports.executeQuery = async (newQuery, args) => {
  try {
    return new Promise(async (resolve, reject) => {
      db.getConnection((err, connection) => {
        if (err) {
          return;
        }
        connection.query(newQuery, args, async (err, data) => {
          if (data) {
            const value = resolve(data);
            connection.release();
            return value;
          } else {
            const value = reject(err);
            connection.release();
            return value;
          }
        });
      });
    }).finally(() => {
      db.removeAllListeners();
    });
  } catch (err) {
    db.getConnection((err, connection) => {
      if (err) {
        console.error("Error acquiring connection:", err);
        return;
      }
      connection.release();
    });
  }
};

process.on("exit", () => {
  db.end(); // Close the connection pool
});
import mysql from 'mysql2'

/** call database */
const db = mysql.createPool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password:  process.env.DB_PASS,
  database:  process.env.DB_DATABASE,
  dateStrings:true,
  waitForConnections: true,
  connectionLimit: 50,
  queueLimit: 50,
});

/** database connection for all Api's */
export const executeQuery = async (newQuery, args) => {
  try {
  
    return new Promise(async (resolve, reject) => {
      db.getConnection((err, connection) => {
        if (err) {
          return;
        }
        connection.query(newQuery, args, async (err, data) => {
        
          if (data) {
       
           return resolve(data);
            
     
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


export const escapeRequestBody = async(req, res) => {
  // Loop through each property in req.body
  if (req.body && typeof(req.body) === 'object') {
    // Loop through each property in req.body
    for (const key in req.body) {
      // Check if the property is present in req.body and is not null or undefined
      if ( req.body[key] != null) {
        // Escape the value using mysql.escape
        req.body[key] = mysql.escape(req.body[key]);
      }
    }
  }
  // Move to the next middleware or route handler
}
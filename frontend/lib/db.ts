// frontend/lib/db.ts
import mysql from "mysql2"

// Create connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "xai_medtrack_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

export default pool.promise()

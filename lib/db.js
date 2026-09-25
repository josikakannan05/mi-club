const mysql = require("mysql2");

const db = mysql.createPool({
  host: "gateway01.ap-northeast-1.prod.aws.tidbcloud.com",
  port: 4000,
  user: "2a23YoqqAhw6BSm.root",
  password: "YAhXJj6Oikr2MOfdg",
  database: "mi_club",
  ssl: { minVersion: "TLSv1.2", rejectUnauthorized: true },
  waitForConnections: true,
  connectionLimit: 5,
});

db.getConnection((err) => {
  if (err) {
    console.error("❌ TiDB connection failed:", err.message);
    return;
  }
  console.log("✅ TiDB connected successfully!");
});

module.exports = db;
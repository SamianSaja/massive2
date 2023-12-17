import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'samian',
  database: 'kalt'
});

db.connect((err) => {
  if (err) {
    console.log('error connecting mysql: ' + err.stack);
    return;
  }
  console.log('connected to mysql as id ' + db.threadId);
});

export default db;

import mysql2 from 'mysql2/promise.js';

const connection = async () => {
  if (global.connection && global.connection.state !== 'disconnected') {
    return global.connection;
  }
  const con = await mysql2.createConnection({
    host:'localhost',
    port:'3306',
    database:'SIMULADO_SAEP',
    user:'root',
    password:'1234',
    multipleStatements: true
  })
  global.connection = con ;
  return con;
}


export default connection;

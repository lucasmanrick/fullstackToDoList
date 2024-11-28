import connection from '../config/db.js';


export class Usuario {
  constructor(pUsuario) {
    this.nome = pUsuario.nome;
    this.email = pUsuario.email;
  }

  async insertUsuario () {
    const conn = await connection();
    try {
    const pSql = `INSERT INTO usuario (nome,email) VALUES (?,?)`;
    const pValues = [this.nome,this.email];
    const [result] = await conn.query(pSql,pValues);
      return result
    }
    catch(e) {
      return {error:e.message}
    }
  }

  async getUsuarios () {
    const conn = await connection();
    try {
      const [rows] = await conn.query(`SELECT ID_USUARIO, NOME FROM USUARIO`);
      if(rows.length >= 1) {
        return rows
      }else {
        return {serverMessage:"não possui usuarios para serem retornados"}
      }
     
    }catch (e) {
      return {error:e.message}
    }
  }
}



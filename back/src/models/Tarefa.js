import connection from '../config/db.js';


export class Tarefa {
  constructor(pTarefa) {
    this.id_usuario = pTarefa.id_usuario;
    this.equipe = pTarefa.equipe;
    this.descricao = pTarefa.descricao;
    this.prioridade = pTarefa.prioridade;
    this.status = pTarefa.status;
    this.id_tarefa = pTarefa.id_tarefa;
  }

  async insertTarefa () {
    const conn = await connection();
    try {
    const pSql = `INSERT INTO tarefa (id_usuario,descricao,equipe,prioridade,status) VALUES (?,?,?,?,?)`;
    const pValues = [this.id_usuario,this.descricao,this.equipe,this.prioridade,this.status];
    const [result] = await conn.query(pSql,pValues);
      return result
    }
    catch(e) {
      return {error:e.message}
    }
  }

  static async listarTarefas () {
    const conn = await connection();
    try {
      const [rows] = await conn.query(`SELECT t.id_tarefa,t.id_usuario,t.descricao,t.equipe,t.prioridade,t.data_cadastro,t.status, u.nome FROM tarefa as t JOIN usuario as u on u.id_usuario = t.id_usuario`);
      return rows
    }
    catch(e) {
      return {error:e.message}
    }
  }
 
  static async atualizarStatus (id,status) {
    const conn = await connection();
    try {
      const [rows] = await conn.query(`UPDATE tarefa SET status=? WHERE id_tarefa=?`,[status,id]);
      return rows
    }catch(e) {
      return {message:e.message}
    }
  }

  static async deletarTask (id) {
    const conn = await connection();
    
    try {
      const [rows] = await conn.query(`DELETE FROM tarefa WHERE id_tarefa=?`,[parseInt(id)]);
      return rows
    }catch(e) {
      return {message:e.message}
    }
  }


  static async dadosTarefa (id) {
    const conn = await connection();
    try{
      const [getingData] = await conn.query(`select t.*, u.* from tarefa as t join usuario as u on u.id_usuario = t.id_usuario where t.id_tarefa = ?`, [id])
      return getingData
    }catch(e){
      return {message:e.message}
    }
  }


  async atualizaTarefa () {
    const conn = await connection();
    try{
      const response = await conn.query(`UPDATE tarefa SET id_usuario=?,descricao=?,equipe=?,prioridade=? WHERE id_tarefa=?`,[this.id_usuario,this.descricao,this.equipe,this.prioridade,this.id_tarefa])
      return response
    }catch(e) {
      return {message:e.message}
    }
  }
}



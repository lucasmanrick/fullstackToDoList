import {Tarefa} from '../models/Tarefa.js';

  const TarefaController = {
  novaTarefa: async(req,res) => {
    try{
      const {id_usuario,descricao,equipe,prioridade} = req.body;
      const status = "NÃO INICIADO"
      const newTarefa = new Tarefa({id_usuario,descricao,equipe,prioridade,status})
      const result = await newTarefa.insertTarefa();

      return res.json({result})
    }catch(e) {
      return res.json({"message":e.message})
    }
  },
   listarTarefas:async (req,res) => {
    try{
      const tarefas = await Tarefa.listarTarefas()
      return res.json({tarefas})
    }catch (e) {
      res.json({message:e.message})
    }
   },

   atualizarStatus:async (req,res) => {
    try{
      const {id} = req.params;
      const {status} = req.body;
      const newStatus = status.toUpperCase();
      const tarefasUpdate = await Tarefa.atualizarStatus(id,newStatus)
      return res.json({tarefasUpdate})
    }catch (e) {
      res.json({message:e.message})
    }
   },


   deletarTask:async (req,res) => {
    try{
      const {id} = req.params;
      console.log(id)
      const tarefasDelete = await Tarefa.deletarTask(id)
      console.log(tarefasDelete)
      return res.json({tarefasDelete})
    }catch (e) {
      res.json({message:e.message})
    }
   },

   dadosTarefa: async (req,res) => {
    const {id} = req.params;

    try{
      if(id) {
        const response = await Tarefa.dadosTarefa(id);
        return res.json(response)
      }
    }catch(e) {
      res.json({message:e.message})
    }
   },

   atualizaTarefa: async (req,res) => {
    const {id} = req.params;
    const {id_usuario,descricao,equipe,prioridade,id_tarefa} = req.body;
    try {
      const newTarefa = new Tarefa({id_usuario,descricao,equipe,prioridade,id_tarefa})
      const result = await newTarefa.atualizaTarefa();
      return res.json(result)
    }catch(e) {
      res.json({message:e.message})
    }
   }
}


export default TarefaController;
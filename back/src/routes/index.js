import {Router} from 'express';
import UsuarioController from '../controllers/UsuarioController.js';
import TarefaController from "../controllers/TarefaController.js"

const router = Router();

router.post("/novoUsuario",  UsuarioController.novoUsuario)
router.get("/listarUsuarios", UsuarioController.listarUsuarios)
router.post("/novaTarefa", TarefaController.novaTarefa)

router.get("/dadosTarefa/:id", TarefaController.dadosTarefa)
router.get("/listarTarefas", TarefaController.listarTarefas)
router.put("/atualizarStatus/:id", TarefaController.atualizarStatus)
router.delete("/deletarTask/:id", TarefaController.deletarTask)

router.put("/atualizaTarefa/:id", TarefaController.atualizaTarefa)


export default router ;
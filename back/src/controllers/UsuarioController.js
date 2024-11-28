import {Usuario} from '../models/Usuario.js';

  const usuarioController = {
  novoUsuario: async(req,res) => {
    try{
      const {nome,email} = req.body;
      console.log("chegou 1", nome,email)
      const usuario = new Usuario({nome,email})
      const result = await usuario.insertUsuario();

      return res.json({result})
    }catch(e) {
      return res.json({"message":e.message})
    }
  },

  listarUsuarios: async (req,res) => {
    try {
      const newUser = new Usuario({nome:"",email:""});
      const returnRequest = await newUser.getUsuarios();
      return res.json(returnRequest)
    }
    catch(e) {
      res.json({error:e.message})
    }
  }
}


export default usuarioController;
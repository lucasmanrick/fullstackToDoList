$(document).ready(function() {
  axios.get(`${localStorage.getItem('ipApi')}listarUsuarios`)
  .then(response => {
    console.log(response.data)
    $("#nomeUser").empty();
    $("#nomeUser").append($(`<option>Selecione um usuário</option>`))
     response.data.forEach(e => {
       $("#nomeUser").append($(`<option value="${e.ID_USUARIO}">${e.NOME}</option>`))
     })
  })
  .catch(error => {
    console.log(error)
    // alert("Ocorreu um erro")
  })

  const existenceTask = sessionStorage.getItem("taskId");

  if(existenceTask){
    console.log("existe task")
    console.log(existenceTask)
    console.log(`${localStorage.getItem("ipApi")}dadosTarefa/${existenceTask}`)
    axios.get(`${localStorage.getItem("ipApi")}dadosTarefa/${existenceTask}`).then(resposta => {
      console.log(resposta)
      const tarefa = resposta.data[0];
      document.getElementById(`descricao`).value = tarefa.descricao;
      document.getElementById(`equipe`).value = tarefa.equipe;
      document.getElementById(`prioridade`).value = tarefa.prioridade;
      document.getElementById(`nomeUser`).value = tarefa.id_usuario;
    })
  }

  $(document).off("submit", "#formNovaTarefa");
  $(document).on("submit","#formNovaTarefa", async function(event) {
    event.preventDefault();
    const formData ={
      id_usuario: document.getElementById('nomeUser').value,
      descricao:document.getElementById('descricao').value,
      equipe:document.getElementById('equipe').value,
      prioridade:document.getElementById('prioridade').value,
      id_tarefa:existenceTask
    }

    if(existenceTask) {
      console.log(existenceTask)
      axios.put(`${localStorage.getItem("ipApi")}atualizaTarefa/${existenceTask}`,formData).then(resposta => {
        if(resposta.message) {
          alert("não foi possivel concluir a atualização")
        }else {
          alert("tarefa editada com sucesso!")
        }
      })
    }else {
      axios.post(`${localStorage.getItem('ipApi')}novaTarefa`, formData)
      .then(response => {
        console.log(response)
        alert("nova Tarefa registrada com sucesso")
      }).catch(error => {
        console.log(error)
        alert("Ocorreu um erro")
      })
    }
  })


})
$(documento).ready(função() {


  const tasksId = sessionStorage.getItem("tasksId");
  console.log("Editar tarefa:", taskId);

  se(tasksId) {
  deixe receberUsuários;
    axios.get(` ${localStorage.getItem('ipApi')} listarUsuarios`)

      .então(resposta => {
        const userSelect = $('#nomeUsuário');
        userSelect.empty();
        userSelect.append('<option value="">Seleção...</option>')

        console.log(resposta.dados.usuários)
        console.log(resposta.dados)
        const usuários = resposta.dados.usuários;
        receiveUsers = usuários
        usuários.forEach(usuário => {
          userSelect.append(`<valor da opção=" ${user.id_usuario} " id=" ${user.id_usuario} "> ${user.nome} </option>`)
        });
        carregarDados();


        // alert('Usuário cadastrado com sucesso.')
      }).catch(erro => {
        console.log(erro);
        // alert('Ocorreu um erro')
      })
 
 
  função carregarDados() {
      se(tasksId) {
        axios.get(` ${localStorage.getItem('ipApi')} listarTarefa/ ${tasksId} `)
          .então(resposta => {
            console.log(resposta)
            const tarefa = resposta.data.tarefa[0];
            document.getElementById("descricao").value = tarefa.descricao;
            document.getElementById("equipe").value = tarefa.equipe;
            const nomeUserSelect = document.getElementById("nomeUser"); //
            nomeUserSelect.innerHTML += `<option id=" ${tarefa.id_usuario} " value=" ${tarefa.id_usuario} " selecionado> ${tarefa.nome} </option>`
            $('#nomeUser').find('option').each(function() {
              let val = $(this).val();
              if(val === tarefa.id_usuario) {
               document.getElementById(`user-${tarefa.id_usuario}`).setAttribute("selected","")
            }
          });

        const prioridadeSelect = document.getElementById("prioridade");
        prioridadeSelect.value = tarefa.prioridade;
      }).catch(erro => {
        console("Erro ao buscar tarefa:", erro)
      })
  }
  }
  } outro {
  axios.get(` ${localStorage.getItem('ipApi')} listarUsuarios`)

    .então(resposta => {
      const userSelect = $('#nomeUsuário');
      userSelect.empty();
      userSelect.append('<option value="">Seleção...</option>')

      console.log(resposta.dados.usuários)
      console.log(resposta.dados)
      const usuários = resposta.dados.usuários;
      usuários.forEach(usuário => {
        userSelect.append(`<valor da opção=" ${user.id_usuario} "> ${user.nome} </option>`)
      });
      carregarDados();


      // alert('Usuário cadastrado com sucesso.')
    }).catch(erro => {
      console.log(erro);
      // alert('Ocorreu um erro')
    })
}
$(document).off('enviar', '#novaTarefa');
$(document).on('submit', '#novaTarefa', função assíncrona(evento) {

  evento.preventDefault();

  const formData = {
    descrição: document.getElementById('descricao').value,
    equipe: document.getElementById('equipe').value,
    prioridade: document.getElementById('prioridade').value,
    id_usuario: document.getElementById('nomeUser').value
  }
 
  se(!tasksId) {

    axios.post(` ${localStorage.getItem('ipApi')} novaTarefa`, formData)
      .então(resposta => {
        console.log(resposta);
        alert('Tarefa cadastrada com sucesso.')

      }).catch(erro => {
        console.log(erro);
        alert('Ocorreu um erro')

      })

  } outro {
  axios.put(` ${localStorage.getItem('ipApi')} atualizarTarefa/ ${tarefasId} `, formData)
    .então(resposta => {
      console.log(resposta);
      alert('Tarefa cadastrada com sucesso.')

    }).catch(erro => {
      console.log(erro);
      alert('Ocorreu um erro')

    })
}
  })
 
  })
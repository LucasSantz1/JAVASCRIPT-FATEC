// Classe Tarefa
class Tarefa {
    constructor(nome, descricao) {
      this.id = Date.now(); // ID único baseado no timestamp
      this.nome = nome;
      this.descricao = descricao;
      this.status = 'Pendente';
    }
  
    concluir() {
      this.status = 'Concluída';
    }
  
    detalhes() {
      return `Tarefa: ${this.nome}\nDescrição: ${this.descricao}\nStatus: ${this.status}`;
    }
  }
  
  // Classe GerenciadorDeTarefas
  class GerenciadorDeTarefas {
    constructor() {
      this.tarefas = this.carregarTarefas();
      this.listarTarefas();
    }
  
    adicionarTarefa(tarefa) {
      this.tarefas.push(tarefa);
      this.salvarTarefas();
      this.listarTarefas();
    }
  
    listarTarefas() {
      const listaTarefas = document.getElementById('lista-tarefas');
      listaTarefas.innerHTML = ''; // Limpar a lista antes de exibir
  
      if (this.tarefas.length === 0) {
        const vazio = document.createElement('p');
        vazio.textContent = 'Nenhuma tarefa adicionada.';
        listaTarefas.appendChild(vazio);
        return;
      }
  
      this.tarefas.forEach((tarefa) => {
        const li = document.createElement('li');
  
        const taskInfo = document.createElement('div');
        taskInfo.classList.add('task-info');
  
        const taskName = document.createElement('p');
        taskName.classList.add('task-name');
        taskName.textContent = tarefa.nome;
  
        const taskStatus = document.createElement('p');
        taskStatus.classList.add('task-status');
        taskStatus.textContent = `Status: ${tarefa.status}`;
  
        taskInfo.appendChild(taskName);
        taskInfo.appendChild(taskStatus);
  
        // Container para botões
        const buttons = document.createElement('div');
        buttons.classList.add('buttons');
  
        // Botão para concluir tarefa
        const botaoConcluir = document.createElement('button');
        botaoConcluir.textContent = 'Concluir';
        botaoConcluir.classList.add('button');
        botaoConcluir.onclick = () => this.marcarComoConcluida(tarefa.id);
  
        // Botão para visualizar detalhes
        const botaoDetalhes = document.createElement('button');
        botaoDetalhes.textContent = 'Detalhes';
        botaoDetalhes.classList.add('button');
        botaoDetalhes.onclick = () => this.visualizarDetalhes(tarefa.id);
  
        // Botão para remover tarefa
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.classList.add('button');
        botaoRemover.onclick = () => this.removerTarefa(tarefa.id);
  
        buttons.appendChild(botaoConcluir);
        buttons.appendChild(botaoDetalhes);
        buttons.appendChild(botaoRemover);
  
        li.appendChild(taskInfo);
        li.appendChild(buttons);
        listaTarefas.appendChild(li);
      });
    }
  
    marcarComoConcluida(id) {
      const tarefa = this.tarefas.find(tarefa => tarefa.id === id);
      if (tarefa) {
        tarefa.concluir();
        this.salvarTarefas();
        this.listarTarefas();
      }
    }
  
    visualizarDetalhes(id) {
      const tarefa = this.tarefas.find(tarefa => tarefa.id === id);
      if (tarefa) {
        alert(tarefa.detalhes());
      }
    }
  
    removerTarefa(id) {
      this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
      this.salvarTarefas();
      this.listarTarefas();
    }
  
    salvarTarefas() {
      localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
    }
  
    carregarTarefas() {
      const tarefasSalvas = localStorage.getItem('tarefas');
      if (tarefasSalvas) {
        return JSON.parse(tarefasSalvas).map(tarefaData => {
          const tarefa = new Tarefa(tarefaData.nome, tarefaData.descricao);
          tarefa.id = tarefaData.id;
          tarefa.status = tarefaData.status;
          return tarefa;
        });
      } else {
        return [];
      }
    }
  }
  
  // Instanciar o gerenciador de tarefas
  const gerenciador = new GerenciadorDeTarefas();
  
  // Capturar o evento de envio do formulário
  document.getElementById('form-tarefa').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value.trim();
    const descricao = document.getElementById('descricao').value.trim();
  
    if (nome === '' || descricao === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    const novaTarefa = new Tarefa(nome, descricao);
    gerenciador.adicionarTarefa(novaTarefa);
  
    // Limpar campos do formulário
    document.getElementById('form-tarefa').reset();
  });
  
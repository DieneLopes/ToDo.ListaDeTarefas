function atualizarQuantidade () {
    document.getElementById('numeros').innerHTML = buscar().length;    //ajuste da contagem de tarefas no titulo
}

function listarTarefas() {
    let conteudo = buscar().sort().map(function (tarefa) {         //ajuste da ordem alfabetica nas tarefas adicionadas
        return `
            <div>
                 <input type="checkbox"> 
                 ${tarefa.titulo}
                 <span Class="badge 
                 ${tarefa.prioridade === 'Baixa' && 'bg-primary'} 
                 ${tarefa.prioridade === 'Media' && 'bg-warning'} 
                 ${tarefa.prioridade === 'Alta' && 'bg-danger'}">
                 ${tarefa.prioridade}
                 </span>
            </div>`;
    })
    document.getElementById('tarefas').innerHTML = conteudo.sort().join('');
}

function addTarefa() {                             //ajuste da validação para quando for adicionada alguma tarefa
    event.preventDefault();

    let titulo = document.getElementById('input_nova_tarefa').value;

    if (titulo.trim() === '') {
        alert('Adicione uma tarefa válida');
        return;
    }
    if (buscar().some(tarefa => titulo === tarefa.titulo) === true) {
        alert('Tarefa já existe')
        return;
    }

    salvar(titulo, input_prioridade.value)
    document.getElementById('input_nova_tarefa').value ='';
    atualizarQuantidade();
    listarTarefas();
}

listarTarefas();
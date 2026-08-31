// Chave de armazenamento local
const CHAVE_ARMAZENAMENTO = 'tarefas';
let tarefas = [];
let filtroAtual = 'all';
let idEdicao = null;

// Carrega tarefas do localStorage quando a página carrega
window.addEventListener('load', () => {
    carregarTarefas();
    renderizarTarefas();
    atualizarEstatisticas();
    document.getElementById('todoInput').focus();
});

// Adiciona nova tarefa
function adicionarTarefa() {
    const input = document.getElementById('todoInput');
    const texto = input.value.trim();

    if (!texto) {
        alert('Por favor, digite uma tarefa!');
        return;
    }

    const tarefa = {
        id: Date.now(),
        texto: texto,
        concluida: false,
        prioridade: 'medium',
        dataVencimento: '',
        dataCriacao: new Date().toLocaleDateString('pt-BR')
    };

    tarefas.push(tarefa);
    salvarTarefas();
    renderizarTarefas();
    atualizarEstatisticas();
    input.value = '';
    input.focus();
}

// Deleta tarefa
function deletarTarefa(id) {
    if (confirm('Tem certeza que deseja deletar esta tarefa?')) {
        tarefas = tarefas.filter(tarefa => tarefa.id !== id);
        salvarTarefas();
        renderizarTarefas();
        atualizarEstatisticas();
    }
}

// Alterna conclusão da tarefa
function alternarTarefa(id) {
    const tarefa = tarefas.find(t => t.id === id);
    if (tarefa) {
        tarefa.concluida = !tarefa.concluida;
        salvarTarefas();
        renderizarTarefas();
        atualizarEstatisticas();
    }
}

// Abre modal de edição
function abrirModalEdicao(id) {
    idEdicao = id;
    const tarefa = tarefas.find(t => t.id === id);
    if (tarefa) {
        document.getElementById('editText').value = tarefa.texto;
        document.getElementById('editPriority').value = tarefa.prioridade;
        document.getElementById('editDueDate').value = tarefa.dataVencimento;
        document.getElementById('editModal').classList.add('show');
    }
}

// Fecha modal de edição
function fecharModal() {
    document.getElementById('editModal').classList.remove('show');
    idEdicao = null;
}

// Salva edição da tarefa
function salvarEdicao() {
    const tarefa = tarefas.find(t => t.id === idEdicao);
    if (tarefa) {
        tarefa.texto = document.getElementById('editText').value.trim();
        tarefa.prioridade = document.getElementById('editPriority').value;
        tarefa.dataVencimento = document.getElementById('editDueDate').value;

        if (!tarefa.texto) {
            alert('A descrição da tarefa não pode estar vazia!');
            return;
        }

        salvarTarefas();
        renderizarTarefas();
        atualizarEstatisticas();
        fecharModal();
    }
}

// Filtra tarefas
function filtrarTarefas(filtro) {
    filtroAtual = filtro;
    
    // Atualiza botão ativo
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderizarTarefas();
}

// Limpa tarefas concluídas
function limparConcluidas() {
    if (confirm('Deletar todas as tarefas concluídas? Esta ação não pode ser desfeita!')) {
        tarefas = tarefas.filter(tarefa => !tarefa.concluida);
        salvarTarefas();
        renderizarTarefas();
        atualizarEstatisticas();
    }
}

// Renderiza tarefas
function renderizarTarefas() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

    let tarefasFiltradas = tarefas;

    // Aplica filtro
    switch (filtroAtual) {
        case 'active':
            tarefasFiltradas = tarefas.filter(t => !t.concluida);
            break;
        case 'completed':
            tarefasFiltradas = tarefas.filter(t => t.concluida);
            break;
        case 'high':
            tarefasFiltradas = tarefas.filter(t => t.prioridade === 'high');
            break;
        case 'medium':
            tarefasFiltradas = tarefas.filter(t => t.prioridade === 'medium');
            break;
        case 'low':
            tarefasFiltradas = tarefas.filter(t => t.prioridade === 'low');
            break;
    }

    if (tarefasFiltradas.length === 0) {
        todoList.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📭</div>
                <div class="empty-state-text">Nenhuma tarefa ainda. Adicione uma para começar!</div>
            </div>
        `;
        return;
    }

    // Ordena por prioridade
    const ordemPrioridade = { high: 1, medium: 2, low: 3 };
    tarefasFiltradas.sort((a, b) => ordemPrioridade[a.prioridade] - ordemPrioridade[b.prioridade]);

    tarefasFiltradas.forEach(tarefa => {
        const li = document.createElement('li');
        li.className = `todo-item ${tarefa.concluida ? 'completed' : ''}`;

        const classePrioridade = `priority-${tarefa.prioridade}`;
        const textoVencimento = tarefa.dataVencimento ? `<div class="todo-date">📅 ${tarefa.dataVencimento}</div>` : '';
        
        const textoPrioridade = tarefa.prioridade === 'high' ? 'Alta' : tarefa.prioridade === 'medium' ? 'Média' : 'Baixa';

        li.innerHTML = `
            <input 
                type="checkbox" 
                class="checkbox" 
                ${tarefa.concluida ? 'checked' : ''}
                onchange="alternarTarefa(${tarefa.id})"
            >
            <div class="todo-content">
                <div class="todo-text">${escaparHTML(tarefa.texto)}</div>
                ${textoVencimento}
            </div>
            <div class="todo-priority ${classePrioridade}">
                ${textoPrioridade}
            </div>
            <div class="todo-actions">
                <button class="btn-edit" onclick="abrirModalEdicao(${tarefa.id})">Editar</button>
                <button class="btn-delete" onclick="deletarTarefa(${tarefa.id})">Deletar</button>
            </div>
        `;

        todoList.appendChild(li);
    });
}

// Atualiza estatísticas
function atualizarEstatisticas() {
    const total = tarefas.length;
    const ativas = tarefas.filter(t => !t.concluida).length;
    const concluidas = tarefas.filter(t => t.concluida).length;

    document.getElementById('totalCount').textContent = total;
    document.getElementById('activeCount').textContent = ativas;
    document.getElementById('completedCount').textContent = concluidas;
}

// Salva tarefas no localStorage
function salvarTarefas() {
    localStorage.setItem(CHAVE_ARMAZENAMENTO, JSON.stringify(tarefas));
}

// Carrega tarefas do localStorage
function carregarTarefas() {
    const salvo = localStorage.getItem(CHAVE_ARMAZENAMENTO);
    if (salvo) {
        try {
            tarefas = JSON.parse(salvo);
        } catch (e) {
            console.error('Erro ao carregar tarefas:', e);
            tarefas = [];
        }
    }
}

// Escapa HTML para prevenir XSS
function escaparHTML(texto) {
    const mapa = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return texto.replace(/[&<>"']/g, m => mapa[m]);
}

// Permite pressionar Enter para adicionar tarefa
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && document.activeElement.id === 'todoInput') {
        adicionarTarefa();
    }
});

// Fecha modal ao clicar fora
document.getElementById('editModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'editModal') {
        fecharModal();
    }
});

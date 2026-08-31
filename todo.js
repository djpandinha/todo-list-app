// Local Storage Key
const STORAGE_KEY = 'todos';
let todos = [];
let currentFilter = 'all';
let editingId = null;

// Load todos from localStorage on page load
window.addEventListener('load', () => {
    loadTodos();
    renderTodos();
    updateStats();
    document.getElementById('todoInput').focus();
});

// Add new todo
function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();

    if (!text) {
        alert('Please enter a task!');
        return;
    }

    const todo = {
        id: Date.now(),
        text: text,
        completed: false,
        priority: 'medium',
        dueDate: '',
        createdAt: new Date().toLocaleDateString()
    };

    todos.push(todo);
    saveTodos();
    renderTodos();
    updateStats();
    input.value = '';
    input.focus();
}

// Delete todo
function deleteTodo(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        todos = todos.filter(todo => todo.id !== id);
        saveTodos();
        renderTodos();
        updateStats();
    }
}

// Toggle todo completion
function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
        updateStats();
    }
}

// Open edit modal
function openEditModal(id) {
    editingId = id;
    const todo = todos.find(t => t.id === id);
    if (todo) {
        document.getElementById('editText').value = todo.text;
        document.getElementById('editPriority').value = todo.priority;
        document.getElementById('editDueDate').value = todo.dueDate;
        document.getElementById('editModal').classList.add('show');
    }
}

// Close edit modal
function closeModal() {
    document.getElementById('editModal').classList.remove('show');
    editingId = null;
}

// Save edited todo
function saveEdit() {
    const todo = todos.find(t => t.id === editingId);
    if (todo) {
        todo.text = document.getElementById('editText').value.trim();
        todo.priority = document.getElementById('editPriority').value;
        todo.dueDate = document.getElementById('editDueDate').value;

        if (!todo.text) {
            alert('Task description cannot be empty!');
            return;
        }

        saveTodos();
        renderTodos();
        updateStats();
        closeModal();
    }
}

// Filter todos
function filterTodos(filter) {
    currentFilter = filter;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderTodos();
}

// Clear completed todos
function clearCompleted() {
    if (confirm('Delete all completed tasks? This cannot be undone!')) {
        todos = todos.filter(todo => !todo.completed);
        saveTodos();
        renderTodos();
        updateStats();
    }
}

// Render todos
function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

    let filteredTodos = todos;

    // Apply filter
    switch (currentFilter) {
        case 'active':
            filteredTodos = todos.filter(t => !t.completed);
            break;
        case 'completed':
            filteredTodos = todos.filter(t => t.completed);
            break;
        case 'high':
            filteredTodos = todos.filter(t => t.priority === 'high');
            break;
        case 'medium':
            filteredTodos = todos.filter(t => t.priority === 'medium');
            break;
        case 'low':
            filteredTodos = todos.filter(t => t.priority === 'low');
            break;
    }

    if (filteredTodos.length === 0) {
        todoList.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📭</div>
                <div class="empty-state-text">No tasks yet. Add one to get started!</div>
            </div>
        `;
        return;
    }

    // Sort by priority
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    filteredTodos.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

    filteredTodos.forEach(todo => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;

        const priorityClass = `priority-${todo.priority}`;
        const dueDateDisplay = todo.dueDate ? `<div class="todo-date">📅 ${todo.dueDate}</div>` : '';

        li.innerHTML = `
            <input 
                type="checkbox" 
                class="checkbox" 
                ${todo.completed ? 'checked' : ''}
                onchange="toggleTodo(${todo.id})"
            >
            <div class="todo-content">
                <div class="todo-text">${escapeHtml(todo.text)}</div>
                ${dueDateDisplay}
            </div>
            <div class="todo-priority ${priorityClass}">
                ${todo.priority}
            </div>
            <div class="todo-actions">
                <button class="btn-edit" onclick="openEditModal(${todo.id})">Edit</button>
                <button class="btn-delete" onclick="deleteTodo(${todo.id})">Delete</button>
            </div>
        `;

        todoList.appendChild(li);
    });
}

// Update statistics
function updateStats() {
    const total = todos.length;
    const active = todos.filter(t => !t.completed).length;
    const completed = todos.filter(t => t.completed).length;

    document.getElementById('totalCount').textContent = total;
    document.getElementById('activeCount').textContent = active;
    document.getElementById('completedCount').textContent = completed;
}

// Save todos to localStorage
function saveTodos() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

// Load todos from localStorage
function loadTodos() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            todos = JSON.parse(saved);
        } catch (e) {
            console.error('Error loading todos:', e);
            todos = [];
        }
    }
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Allow Enter key to add todo
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && document.activeElement.id === 'todoInput') {
        addTodo();
    }
});

// Close modal when clicking outside
document.getElementById('editModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'editModal') {
        closeModal();
    }
});

# ✅ Lista de Tarefas

Uma aplicação de lista de tarefas bonita e completa com armazenamento local. Organize-se e seja mais produtivo!

## ✨ Recursos

- ✅ **Adicionar Tarefas** - Crie novas tarefas com facilidade
- 🎯 **Níveis de Prioridade** - Configure Alta, Média ou Baixa prioridade para cada tarefa
- 📅 **Datas de Vencimento** - Adicione prazos opcionais às suas tarefas
- ✔️ **Marcar Concluído** - Marque tarefas como concluídas com um clique
- ✏️ **Editar Tarefas** - Modifique descrição, prioridade e data de vencimento
- 🗑️ **Deletar Tarefas** - Remova tarefas que não precisa mais
- 🔍 **Filtrar Tarefas** - Visualize Todas, Ativas ou Concluídas
- 💾 **Armazenamento Local** - Todas as tarefas são salvas automaticamente no navegador
- 📊 **Estatísticas** - Veja contagem de tarefas totais, ativas e concluídas
- 📱 **Design Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- 🎨 **Interface Bonita** - Design moderno com gradientes e animações suaves

## 🚀 Como Usar

### Online
1. Visite seu repositório no GitHub
2. Abra o arquivo `index.html` no navegador
3. Comece a organizar suas tarefas!

### Localmente
```bash
# Clone o repositório
git clone https://github.com/djpandinha/todo-list-app.git

# Navegue até a pasta
cd todo-list-app

# Abra no navegador
# Opção 1: Clique duas vezes no arquivo index.html
# Opção 2: Use um servidor local
python -m http.server 8000
# Depois abra http://localhost:8000
```

## 🎮 Como Funciona

### Adicionando uma Tarefa
1. Digite sua tarefa no campo de entrada
2. Clique em "Adicionar" ou pressione Enter
3. Sua tarefa aparecerá na lista

### Gerenciando Tarefas
- **Concluir**: Clique na caixa de seleção para marcar como pronta
- **Editar**: Clique em "Editar" para modificar os detalhes
- **Deletar**: Clique em "Deletar" para remover a tarefa
- **Definir Prioridade**: Escolha Alta, Média ou Baixa
- **Adicionar Data de Vencimento**: Configure prazos opcionais

### Filtrando
Use os botões de filtro para visualizar:
- **Todas** - Veja todas as tarefas
- **Ativas** - Apenas tarefas incompletas
- **Concluídas** - Apenas tarefas finalizadas
- **Prioridade** - Filtre por Alta, Média ou Baixa

### Estatísticas
O painel mostra:
- Número total de tarefas
- Número de tarefas ativas
- Número de tarefas concluídas

## 💾 Armazenamento Local

Suas tarefas são salvas automaticamente no armazenamento local do navegador. Isso significa:
- ✅ As tarefas persistem mesmo após fechar o navegador
- ✅ Sem necessidade de login
- ✅ Os dados ficam no seu dispositivo
- ✅ Sem necessidade de armazenamento em nuvem

**Nota**: Cada navegador e dispositivo armazena dados separadamente. Limpar os dados do navegador deletará suas tarefas.

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura
- **CSS3** - Estilos com gradientes e animações
- **JavaScript Vanilla** - Toda a funcionalidade
- **Local Storage API** - Persistência de dados

## 📁 Estrutura de Arquivos

```
todo-list-app/
├── index.html          # Arquivo HTML principal
├── tarefas.js          # Lógica em JavaScript
└── README.md           # Este arquivo
```

## 🎨 Personalizando

### Mudar Cores
Edite as cores do gradiente em `index.html`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Adicionar Mais Níveis de Prioridade
Modifique o `<select>` no modal e adicione novas classes de prioridade em CSS.

### Estender Funcionalidades
O código é bem comentado e fácil de estender. Adicione recursos como:
- Categorias/Tags
- Busca
- Tarefas recorrentes
- Descrições de tarefas
- Notificações

## 📋 Propriedades da Tarefa

Cada tarefa armazena:
- `id` - Identificador único (timestamp)
- `texto` - Descrição da tarefa
- `concluida` - Status de conclusão
- `prioridade` - Alta, Média ou Baixa
- `dataVencimento` - Prazo opcional
- `dataCriacao` - Data de criação

## 🤖 Estrutura do Armazenamento Local

As tarefas são armazenadas como JSON no armazenamento local:
```javascript
{
  "tarefas": [
    {
      "id": 1693478400000,
      "texto": "Comprar mantimentos",
      "concluida": false,
      "prioridade": "high",
      "dataVencimento": "2024-09-15",
      "dataCriacao": "31/08/2026"
    }
  ]
}
```

## 🌟 Dicas e Truques

- Pressione **Enter** no campo de entrada para adicionar tarefas rapidamente
- Clique fora do modal de edição para fechá-lo
- Classifique por prioridade - tarefas de alta prioridade aparecem primeiro
- Use datas de vencimento para se manter no prazo
- Limpe regularmente as tarefas concluídas para manter sua lista organizada

## 📱 Navegadores Compatíveis

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Navegadores móveis

## 🚀 Melhorias Futuras

- [ ] Funcionalidade de busca
- [ ] Sistema de categorias/tags
- [ ] Tarefas recorrentes
- [ ] Notas/descrições das tarefas
- [ ] Exportar para CSV/PDF
- [ ] Modo escuro
- [ ] Reordenação com arrastar e soltar
- [ ] Notificações sonoras
- [ ] Sincronização em nuvem
- [ ] Histórico de tarefas

## 🐛 Problemas Conhecidos

Nenhum no momento! Se encontrar algum problema, reporte-o.

## 📝 Licença

Livre para usar para fins pessoais e educacionais.

## 👨‍💻 Desenvolvedor

Criado com ❤️ por [@djpandinha](https://github.com/djpandinha)

---

**Organize-se, mantenha a produtividade! Comece a usar sua Lista de Tarefas hoje! 🚀**

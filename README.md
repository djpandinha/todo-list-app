# ✅ Todo List Application

A beautiful, fully-featured todo list app with local storage persistence. Stay organized and productive!

## ✨ Features

- ✅ **Add Tasks** - Create new tasks with ease
- 🎯 **Priority Levels** - Set High, Medium, or Low priority for each task
- 📅 **Due Dates** - Add optional due dates to your tasks
- ✔️ **Mark Complete** - Check off tasks as you complete them
- ✏️ **Edit Tasks** - Modify task descriptions, priority, and due dates
- 🗑️ **Delete Tasks** - Remove tasks you no longer need
- 🔍 **Filter Tasks** - View All, Active, or Completed tasks
- 💾 **Local Storage** - All tasks are automatically saved to your browser
- 📊 **Statistics** - See total, active, and completed task counts
- 📱 **Responsive Design** - Works great on desktop, tablet, and mobile
- 🎨 **Beautiful UI** - Modern gradient design with smooth animations

## 🚀 How to Use

### Online
1. Visit your deployed version (if hosted)
2. Or open `index.html` in your web browser
3. Start adding tasks!

### Locally
```bash
# Clone the repository
git clone https://github.com/djpandinha/todo-list-app.git

# Navigate to the folder
cd todo-list-app

# Open in your browser
# Option 1: Double-click index.html
# Option 2: Use a local server
python -m http.server 8000
# Then open http://localhost:8000
```

## 🎮 How It Works

### Adding a Task
1. Type your task in the input field
2. Click "Add" or press Enter
3. Your task appears in the list

### Managing Tasks
- **Complete**: Click the checkbox to mark tasks as done
- **Edit**: Click "Edit" to modify task details
- **Delete**: Click "Delete" to remove a task
- **Set Priority**: Choose High, Medium, or Low
- **Add Due Date**: Set optional deadlines

### Filtering
Use the filter buttons to view:
- **All** - See all tasks
- **Active** - Only incomplete tasks
- **Completed** - Only finished tasks
- **Priority** - Filter by High, Medium, or Low

### Statistics
The dashboard shows:
- Total number of tasks
- Number of active tasks
- Number of completed tasks

## 💾 Local Storage

Your tasks are automatically saved to your browser's local storage. This means:
- ✅ Tasks persist even after you close the browser
- ✅ No login required
- ✅ Data stays on your device
- ✅ No cloud storage needed

**Note**: Each browser and device stores data separately. Clearing browser data will delete your tasks.

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with gradients and animations
- **Vanilla JavaScript** - All functionality
- **Local Storage API** - Data persistence

## 📁 File Structure

```
todo-list-app/
├── index.html          # Main HTML file
├── todo.js             # JavaScript logic
└── README.md           # This file
```

## 🎨 Customization

### Change Colors
Edit the gradient colors in `index.html`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Add More Priority Levels
Modify the `<select>` in the modal and add new priority classes in CSS.

### Extend Features
The code is well-commented and easy to extend. Add features like:
- Categories/Tags
- Search functionality
- Recurring tasks
- Task descriptions
- Notifications

## 📋 Task Properties

Each task stores:
- `id` - Unique identifier (timestamp)
- `text` - Task description
- `completed` - Completion status
- `priority` - High, Medium, or Low
- `dueDate` - Optional deadline
- `createdAt` - Creation date

## 🤖 Local Storage Structure

Tasks are stored as JSON in browser local storage:
```javascript
{
  "todos": [
    {
      "id": 1693478400000,
      "text": "Buy groceries",
      "completed": false,
      "priority": "high",
      "dueDate": "2024-09-15",
      "createdAt": "8/31/2026"
    }
  ]
}
```

## 🌟 Tips & Tricks

- Press **Enter** in the input field to quickly add tasks
- Click outside the edit modal to close it
- Sort by priority - high priority tasks appear first
- Use due dates to stay on track
- Regularly clear completed tasks to keep your list clean

## 📱 Browser Support

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🚀 Future Enhancements

- [ ] Task search functionality
- [ ] Categories/Tags system
- [ ] Recurring tasks
- [ ] Task notes/descriptions
- [ ] Export to CSV/PDF
- [ ] Dark mode
- [ ] Drag & drop reordering
- [ ] Sound notifications
- [ ] Cloud sync option
- [ ] Task history

## 🐛 Known Issues

None at the moment! If you find any issues, please report them.

## 📝 License

Free to use for personal and educational purposes.

## 👨‍💻 Developer

Created with ❤️ by [@djpandinha](https://github.com/djpandinha)

---

**Get organized, stay productive! Start using your Todo List today! 🚀**

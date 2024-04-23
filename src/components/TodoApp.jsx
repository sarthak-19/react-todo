import { useState } from 'react';
import TaskForm from './TaskForm';
import SingleTask from './SingleTask';

function TodoApp() {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

    const addTask = (task) => {
        const newTask = { id: Math.random(), text: task, completed: false };
        const newTasks = [...tasks, newTask];
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    const deleteTask = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    const toggleComplete = (id) => {
        const newTasks = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    const editTask = (id, newText) => {
        const newTasks = tasks.map((task) => (task.id === id ? { ...task, text: newText } : task));
        setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    };
    return (
        <div className="todo-container">
            <TaskForm addTask={addTask} />
            <div className="todo-list">
                {tasks.map((task) => (
                    <SingleTask
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        toggleComplete={toggleComplete}
                        editTask={editTask}
                    />
                ))}
            </div>
        </div>
    );
}

export default TodoApp;

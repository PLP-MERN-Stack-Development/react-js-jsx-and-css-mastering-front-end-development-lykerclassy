import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage'; // Our custom hook
import Button from '../components/Button';
import Card from '../components/Card';
// We can import icons for a better look (optional)
// import { FaTrash, FaCheckCircle } from 'react-icons/fa';

const TaskManagerPage = () => {
  // Use our custom hook to manage tasks state
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  
  // State for the new task input
  const [newTask, setNewTask] = useState('');
  
  // State for the current filter
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  // Form submit handler to add a new task
  const handleAddTask = (e) => {
    e.preventDefault(); // Prevent page reload
    if (newTask.trim() === '') return; // Don't add empty tasks

    const task = {
      id: Date.now(), // Simple unique ID
      text: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask(''); // Clear the input field
  };

  // Handler to toggle a task's completed status
  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Handler to delete a task
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Derived state: Filter tasks based on the current filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all'
  });

  return (
    <Card className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
        Task Manager
      </h1>

      {/* Add Task Form */}
      <form onSubmit={handleAddTask} className="flex gap-2 mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <Button type="submit" variant="primary">
          Add Task
        </Button>
      </form>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-2 mb-6">
        <Button
          variant={filter === 'all' ? 'primary' : 'secondary'}
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button
          variant={filter === 'active' ? 'primary' : 'secondary'}
          onClick={() => setFilter('active')}
        >
          Active
        </Button>
        <Button
          variant={filter === 'completed' ? 'primary' : 'secondary'}
          onClick={() => setFilter('completed')}
        >
          Completed
        </Button>
      </div>

      {/* Task List */}
<ul className="space-y-3">
  {filteredTasks.map((task) => (
    <li
      key={task.id}
      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow"
    >
      <span
        onClick={() => handleToggleComplete(task.id)}
        className={`flex-grow cursor-pointer text-lg ${
          task.completed
            ? 'line-through text-gray-500 dark:text-gray-400'
            : 'text-gray-800 dark:text-white'
        }`}
      >
        {task.text}
      </span>
      <Button
        variant="danger"
        onClick={() => handleDeleteTask(task.id)}
        className="ml-4"
      >
        {/* <FaTrash /> */}
        Delete
      </Button>
    </li>
  ))}
</ul>
      {filteredTasks.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
            No tasks to show.
          </p>
      )}
    </Card>
  );
};

export default TaskManagerPage;
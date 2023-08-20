import React, { useState } from 'react';
import './styles.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState({ task: '', allottedBy: '', dueDate: '' });
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editTaskInput, setEditTaskInput] = useState('');
  const [editAllottedBy, setEditAllottedBy] = useState('');
  const [editDueDate, setEditDueDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTaskInput((prevTaskInput) => ({
      ...prevTaskInput,
      [name]: value,
    }));
  };

  const handleEditInputChange = (event) => {
    setEditTaskInput(event.target.value);
  };

  const handleEditAllottedByChange = (event) => {
    setEditAllottedBy(event.target.value);
  };

  const handleEditDueDateChange = (event) => {
    setEditDueDate(event.target.value);
  };

  const addTask = () => {
    if (
      taskInput.task.trim() !== '' &&
      taskInput.allottedBy.trim() !== '' &&
      taskInput.dueDate.trim() !== ''
    ) {
      setTasks((prevTasks) => [...prevTasks, taskInput]);
      setTaskInput({
        task: '',
        allottedBy: '',
        dueDate: '',
      });
    }
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditTaskInput(tasks[index].task);
    setEditAllottedBy(tasks[index].allottedBy);
    setEditDueDate(tasks[index].dueDate);
  };

  const updateTask = () => {
    if (editTaskInput.trim() !== '') {
      const newTasks = [...tasks];
      newTasks[editingIndex] = {
        task: editTaskInput,
        allottedBy: editAllottedBy,
        dueDate: editDueDate,
      };
      setTasks(newTasks);
      setEditingIndex(-1);
      setEditTaskInput('');
      setEditAllottedBy('');
      setEditDueDate('');
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.task.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.allottedBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.dueDate.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='top'>
      <div className="todo-list">
        <h2>My To-Do List</h2>
        <div className="add-task">
          <input
            type="text"
            name="task"
            value={taskInput.task}
            onChange={handleInputChange}
            placeholder="Enter your task"
          />
          <input
            type="text"
            name="allottedBy"
            value={taskInput.allottedBy}
            onChange={handleInputChange}
            placeholder="Allotted By"
          />
          <input
            type="date"
            name="dueDate"
            value={taskInput.dueDate}
            onChange={handleInputChange}
          />
          <button onClick={addTask}>Add</button>
        </div>
        <div className="search">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search tasks"
          />
        </div>
        <ul>
          {filteredTasks.map((task, index) => (
            <li key={index}>
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editTaskInput}
                    onChange={handleEditInputChange}
                  />
                  <input
                    type="text"
                    value={editAllottedBy}
                    onChange={handleEditAllottedByChange}
                  />
                  <input
                    type="date"
                    value={editDueDate}
                    onChange={handleEditDueDateChange}
                  />
                  <button onClick={updateTask}>Update</button>
                </>
              ) : (
                <>
                  <div>Task: {task.task}</div>
                  <div>Allotted By: {task.allottedBy}</div>
                  <div>Due Date: {task.dueDate}</div>
                  <button onClick={() => startEditing(index)}>Edit</button>
                  <button onClick={() => removeTask(index)}>Remove</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;

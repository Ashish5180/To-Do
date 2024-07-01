import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store';

const TaskForm = () => {
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim() !== '') {
      dispatch(addTask({ id: Date.now(), title: taskTitle }));
      setTaskTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Add a task"
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
      />
      <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;

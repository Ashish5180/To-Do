import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../store';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Tasks</h2>
      <ul className="grid grid-cols-1 gap-4">
        {tasks.map((task) => (
          <li key={task.id} className="bg-white shadow-md rounded-lg px-4 py-2 flex justify-between items-center">
            <span>{task.title}</span>
            <button
              onClick={() => handleDelete(task.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 focus:outline-none"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

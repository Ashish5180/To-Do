import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import bg from './assets/13bb0947d64611b165c25d813c4da8a8.jpg'
const App = () => {
  // const bgImage = 'https://i.pinimg.com/736x/13/bb/09/13bb0947d64611b165c25d813c4da8a8.jpg';

  return (
    <Provider store={store}>
      <div
        className="min-h-screen flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-3xl font-semibold text-white mb-8">To-Do App</h1>
        <div className="bg-white rounded-lg shadow-md p-8 max-w-lg w-full">
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </Provider>
  );
};

export default App;

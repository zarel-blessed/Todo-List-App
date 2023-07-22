import './App.css';
import { useState } from 'react';
import deleteIcon from './images/Dustbin.png';

function App() {
  let [todoList, setTodoList] = useState([]);
  let [newTask, setNewTask] = useState('');

  const handleChange = (event) => setNewTask(event.target.value); 

  const addNewTask = () => {
    if(!newTask) return;
    const newTodoTask = {
      id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1,
      value: newTask
    }
    setTodoList([...todoList, newTodoTask]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter(task => task.id !== id));
  }

  return (
    <div className='App'>
      <div className='todoApp'>
        <h1 className='appName'>Todo List</h1>
        <section className='inputSection'>
          <input placeholder='Add new task...' type='text' onChange={ handleChange } />
          <button onClick={ addNewTask }>Add</button>
        </section>
        <section className='taskSection'>
          { todoList.map( task => {
            return (
              <div className='taskContainer'>
                <p>{ task.value }</p>
                <button onClick={ () => deleteTask(task.id) }><img src={ deleteIcon } alt='delete' /></button>
              </div>
            )
          }) }
        </section>
        <small className='credits'>Designed & Developed by Shaheer</small>
      </div>
    </div>
  )
}

export default App;

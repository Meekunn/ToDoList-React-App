import React, { useState } from 'react';
import './App.css';
import data from './data.json'
import Header from './Header';
import ToDoList from './TodoList';
import ToDoForm from './ToDoForm'

function App() {

  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? {...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const addTask = (userInput) => {
    let add = [...toDoList];
    add.push({ SN : toDoList.length + 1, task: userInput, done: false});
    setToDoList(add)
  };

  // const deleteList = () => {
  //   let delete =  
  // }
    

  return (
    <div className="wrapper">
      <Header />
      <ToDoForm addTask={addTask} />
      <ToDoList toDoList ={toDoList} handleToggle={handleToggle} />
    </div>
  );
}

export default App;

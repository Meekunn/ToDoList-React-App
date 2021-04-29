import React, { useState } from 'react';
import './App.css';
import data from './data.json'
import Header from './Header';
import ToDoList from './TodoList';
import ToDoForm from './ToDoForm'
//import ToDo from './Todo';

function App() {

  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (SN) => {
    let mapped = toDoList.map(task => {
      return task.SN === Number(SN) ? {...task, done: !task.done} : { ...task};
    });
    setToDoList(mapped);
  }

  const addTask = (userInput) => {
    const add = toDoList;
    add.push({ SN : Date.now(), task: userInput, done: false});
    setToDoList(add)
  };

  const deleteList = () => {
    setToDoList([]); 
  }

  const clearItem = (SN) =>{
    const newArr = toDoList ;
    console.log("newArr", {newArr});
    const delIdx = newArr.findIndex(el => el.SN===SN);
    if(delIdx===-1) {
      alert("Item not found");
      return;
    }
    newArr.splice(delIdx,1);
    console.log("newArr after splice: i yam here --- ", {newArr});
    //update state 
    setToDoList(newArr) ;
    /**
    let del=toDoList.filter(item=>{
      return item.SN!==SN
    })
    console.log("i'm here");
    // let del = [...toDoList];
    console.log("taking SN",SN);
    
    console.log("del",del);
    
    setToDoList(del); 
    */
  }
  console.log("TDOLIST",toDoList)

  return (
    <div className="wrapper">
      <Header />
      <ToDoForm addTask={addTask} />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} deleteList={deleteList} clearItem={clearItem}/>
    </div>
  );
}

export default App;

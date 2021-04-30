import React, { useState } from 'react';
import './App.css';
import data from './data.json'
import Header from './Header';
import ToDoList from './TodoList';
import ToDoForm from './ToDoForm'
//import ToDo from './Todo';

const App = () => {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (SN) => {
    console.log('toggling...');
    const mapped = toDoList.map(task => {
      console.log('compare: ',{argSN:SN},' ^ ',{itemSN:task.SN}, ' = ', task.SN===SN?'true':'false');
      return task.SN === SN ? {...task, done: !task.done} : { ...task};
    });
    setToDoList(mapped);
  }

  // i like the simplicity of the above function, i personally probably wouldn't have thought about it. here is what i would have done below
  const toggleTodo = (SN) => {
    console.log("[toggleTodo] Toggling...")
    setToDoList(currArr => {
      const newArr = [...currArr] ;
      const idx = newArr.findIndex(el => el.SN===SN);
      if(idx===-1) {
        alert("Item not found");
        console.log({newArr});
        return currArr ;
      }
      newArr.splice(idx,1,{...currArr[idx],done:!currArr[idx].done});
      console.log('after Update',{newArr});
      return newArr ;
    })
  }

  const addTask = (userInput) => {
    /**
     * so the addTask stopped working because, i change the previous implementation from 
     * const newArr = [...toDoList];
     * to
     * const newArr = toDoList ;
     * but i didn't actually like the previous implementation as it was too many lines of code for just implimenting state update.
     * ! let me know if you have more question on this
     */
    console.log("adding task...");
    const newTodo = { SN : Date.now(), task: userInput, done: false};
    setToDoList([...toDoList,newTodo]); // so this way is much better
    // below is another way you could implement it, and this have it own advantage, sp remind to talk about this when we meet
    // setToDoList(currToDoList => [...currToDoList,newTodo]);
  };

  const deleteList = () => {
    setToDoList([]); 
  }

  const clearItem = (SN) =>{
    console.log('Removing item...',{SN});
    const newArr = [...toDoList] ;
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
  

  return (
    <div className="wrapper">{console.log("TDOLIST",toDoList)}
      <Header />
      <ToDoForm addTask={addTask} />
      <ToDoList toDoList={[...toDoList]} handleToggle={handleToggle} deleteList={deleteList} clearItem={clearItem}/>
    </div>
  );
}

export default App;

import React from 'react';
import Todo from './Todo';

const ToDoList = ({toDoList, handleToggle, deleteList, clearItem}) => {

    return(
        <div className="lists">
            {toDoList.map((todo,index) => {
                return(
                    <Todo key={index} todo = {todo} handleToggle = {handleToggle} deleteList ={deleteList} clearItem={()=>clearItem(index)}/>
                )
            })}
            <button className="clear-list" onClick ={deleteList}>Clear</button>
        </div>
    );
};

export default ToDoList;
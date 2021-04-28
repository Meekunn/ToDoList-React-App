import React from 'react';
import Todo from './Todo';

const ToDoList = ({toDoList, handleToggle}) => {
    return(
        <div>
            {toDoList.map((todo,index) => {
                return(
                    <Todo key={index} todo = {todo} handleToggle = {handleToggle}/>
                )
            })}
            <button className="clear-list">Clear</button>
        </div>
    );
};

export default ToDoList;
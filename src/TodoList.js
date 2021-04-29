import React from 'react';
import Todo from './Todo';

const ToDoList = ({toDoList, handleToggle, deleteList, clearItem}) => {

    return(
        <div className="lists">
            {toDoList.map((todo,index) => {
                return(
                    <Todo key={`${index}d${todo.SN}`} todo={todo} handleToggle={handleToggle} deleteList={deleteList} clearItem={clearItem}/>
                )
            })}
            <button className="clear-list" onClick ={deleteList}>Clear</button>
        </div>
    );
};

export default ToDoList;
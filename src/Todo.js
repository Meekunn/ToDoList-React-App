import React from 'react';

const ToDo = ({todo, handleToggle, clearItem}) => {

    const handleClick =(e) => {
        e.preventDefault();
        handleToggle(e.currentTarget.SN)
    }
    

    return(
        <div id={todo.SN} onClick={handleClick} name="todo" className={todo.done ? "todo checked" : "todo"}>
            {todo.task}
            <span><button className="clear"onClick={()=>clearItem()}>&times;</button></span>
        </div>
    );
};

export default ToDo;
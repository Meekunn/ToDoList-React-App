import React from 'react';

const ToDo = ({todo, handleToggle, clearItem}) => {

    const handleClick =(e) => {
        e.preventDefault();
        handleToggle(e.currentTarget.SN)
    }
    const handleDelete=(e)=>{
        e.preventDefault();
        clearItem(e.currentTarget.SN);
    }

    return(
        <div id = {todo.Sn} key={todo.Sn +todo.task} onClick={handleClick} name ="todo" className= {todo.done ? "todo checked" : "todo"}>
            {todo.task} 
            <span><button className="clear"onClick={handleDelete}>&times;</button></span>
        </div>
    );
};

export default ToDo;
import React from 'react';

const ToDo = ({todo, handleToggle}) => {
    const handleClick =(e) => {
        e.preventDefault();
        handleToggle(e.currentTarget.Sn)
    }
    return(
        <div id = {todo.Sn} key={todo.Sn +todo.task} onClick={handleClick} name ="todo">
            {todo.task} 
            <span><button>&times;</button></span>
        </div>
    );
};

export default ToDo;
import React from 'react';

const ToDo = ({todo, handleToggle, clearItem}) => {

    const handleClick =(e) => {
        // e.preventDefault();
        e.persist()
        handleToggle(parseInt(e.target.id)) //so toggling was not working because there is no SN property on currentTarget.
        // if you want to handle this from event propagation function like this, you may want to consider dataset attribute on your element.
        //todo REMIND ME SO WE CAN AS WELL TALK ABOUT THAT.
        // or
        // just do currentTarget.id instead, since you've passed the todo.SN to the id attribute
    }
    

    return(
        <div id={todo.SN} name="todo" className={todo.done ? "todo checked" : "todo"}>
            <span id={todo.SN} onClick={handleClick} >
                {todo.task}
            </span>
            {/* So why our clearItem didn't work was because i forgot to pass the SN into the clearItem function below */}
            <span><button className="clear"onClick={()=>clearItem(todo.SN)}>&times;</button></span>
        </div>
    );
};

export default ToDo;
import React, {useState} from 'react';

const ToDoForm = ({addTask}) => {
    
    const [userInput, setUserInput] = useState('');

    const handleChange =(e) => {
        setUserInput(e.currentTarget.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return(
        <form onSubmit = {handleSubmit}>
            <input type="text" placeholder="Enter Task Here.." onChange={handleChange} />
            <button>Add</button>
        </form>
    );
};

export default ToDoForm;
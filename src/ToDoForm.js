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
        <form>
            <input type="text" placeholder="Enter Task Here.." onChange={handleChange} />
            <button onClick= {handleSubmit}>Add</button>
        </form>
    );
};

export default ToDoForm;
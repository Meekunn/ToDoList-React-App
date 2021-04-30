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
            {/*In React, we have controlled and uncontrolled input. so this case your input should controlled, so
            this input line below should have a value prop passed into it. Without it, your input text still retain the previous input value even after you've set it to null.  */}
            <input type="text" placeholder="Enter Task Here.." onChange={handleChange} value={userInput} />
            <button onClick= {handleSubmit}>Add</button>
        </form>
    );
};

export default ToDoForm;
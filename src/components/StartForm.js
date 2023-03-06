import React, {useState} from 'react'
import './App.css'

const StartForm = ({addList, addTask, setView}) => {

const [userInput, setUserInput] = useState({list: '', task: ''});

const handleChange = (e) => {
    setUserInput({...userInput, [e.target.name]: e.currentTarget.value})
}

const handleListSubmit = (e) => {
    e.preventDefault();
    setView(2);
    addList(userInput.list);
    setUserInput({list: '', task: ''});
}

    return (
        <div id='welcome'>
            <h1>Welcome!</h1>
            <h3>Enter the name of your list to begin creating your todo tasks.</h3>
            <form onSubmit = {handleListSubmit} id='startForm'>
            <input name="list" value={userInput.list} type='text' onChange={handleChange} placeholder='List Name'></input>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default StartForm;
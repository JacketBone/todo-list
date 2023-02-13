import React from 'react'
import './App.css'

const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div id={todo.id} key={todo.id+todo.task} name='todo' value={todo.id} onClick={handleClick} className={todo.complete ? "strike" : "open"}>
            {todo.task}
            <button>Done</button>
        </div>
        
    );
};

export default ToDo;
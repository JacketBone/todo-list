import ToDo from './ToDo'
import React from 'react'
import './App.css'

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {

    let styleBorder ={
        borderBottom: '2px solid',
        backgroundColor: 'lightblue',
    }

    return (
        <div className="ToDo">
            {toDoList.map(todo => {
                return (
                    <div style={styleBorder} id={todo.id}>
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                    </div>
                )
            })}
            <button style={{margin:'20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    )
}

export default ToDoList;
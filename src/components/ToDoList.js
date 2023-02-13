import ToDo from './ToDo'
import React from 'react'
import { SortableElement } from 'react-sortable-hoc'
import './App.css'

const SortableItem = SortableElement(ToDo);

const ToDoList = ({items, handleToggle, handleFilter}) => {

    let styleBorder ={
        borderBottom: '2px solid',
        backgroundColor: 'lightblue',
    }

    return (
        <div className="ToDo">
            {items.map((todo,i) => {
                return (
                    <SortableItem todo={todo} index={i} key={todo.id} handleToggle={handleToggle} style={styleBorder}/>
                )
            })}
            <button style={{margin:'20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    )
}

export default ToDoList;
import ToDo from './ToDo'
import React from 'react'
import {SortableElement} from 'react-sortable-hoc';
import './App.css'


const SortableItem = SortableElement(ToDo);

    const ToDoList = ({items, handleFilter, handleToggle}) =>{

        return (
            <div>
            <div className="todoList">
                {items.map((x,i)=>{
                    return <SortableItem 
                        todo={x}
                        index={i}
                        key={x.id}
                        handleFilter={handleFilter}
                        handleToggle={handleToggle}
                    />
                })}
            </div>
            <div>
            <button style={{margin:'20px'}} onClick={handleFilter}>Clear Completed</button>
            </div>
            </div>
        )
        
    };
        


export default ToDoList;
import './components/App.css';
import Head from './components/Header.js'
import React, {useEffect, useState} from 'react'
import data from './data.json'
import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import { SortableContainer } from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';


const SortableList = SortableContainer(ToDoList);

function App() {

const [toDoList, setToDoList] = useState((data) => {
  const items = JSON.parse(localStorage.getItem('toDoList'));
  return items;
});

useEffect(() => {
  window.localStorage.setItem('toDoList', JSON.stringify(toDoList));
}, [toDoList]);

  const onSortEnd = (e) =>{
    var newTodos = arrayMoveImmutable(toDoList, e.oldIndex, e.newIndex )
    setToDoList(newTodos)
  };

  const addTask = (userInput) => {
  let copy = [...toDoList];
  copy = [...copy, {id: toDoList.length + 1, task: userInput, complete: false}];
  setToDoList(copy);
}

const handleToggle = (id) => {
  let mapped = toDoList.map(task => {
    return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
  });
  setToDoList(mapped);
}

const handleFilter = () => {
  let filtered = toDoList.filter(task => {
      return !task.complete;
  })
  setToDoList(filtered);
}

  return (
      <body> 
        <header>
          <Head />
        </header>  
        <main>
          <span className='section'>
            <SectionOne />
          </span>
          <div className='flexColumn'>
            <div id='toDoList'>
            <SortableList items={toDoList} onSortEnd={onSortEnd} handleFilter={handleFilter} handleToggle={handleToggle}/>
            </div>
            <span>
             <ToDoForm addTask={addTask} id='form'/>
            </span>
          </div> 
          <span className='section'>
            <SectionTwo />
          </span>
        </main> 
      </body>
  );
}

export default App;
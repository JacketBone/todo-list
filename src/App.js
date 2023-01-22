import './components/App.css';
import Head from './components/Header.js'
import React, {useState} from 'react'
import data from './data.json'
import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'

function App() {
const [toDoList, setToDoList] = useState(data);
  
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
          <span style={{paddingTop: '10px'}}>
          <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
          </span>
          <span>
          <ToDoForm addTask={addTask} id='form'/>
          </span>
        </main> 
        <footer style={{display: 'none'}}>hi</footer>
      </body>
  );
}

export default App;

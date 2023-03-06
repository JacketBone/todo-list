import './components/App.css';
import Head from './components/Header.js'
import React, {useEffect, useState} from 'react'
import StartForm from './components/StartForm'
import ToDoListLayout from './components/ToDoListLayout'
import { arrayMoveImmutable} from 'array-move';

function App() {
const [toDoList, setToDoList] = useState([]);
const [list, setActiveList] = useState('');
const [task, setTask] = useState({task:'', date:''});
const [view, setActiveView] = useState(1);

  const setView = (view) => {
    setActiveView(view);
  }
  
/*
useEffect(() => {
    const toDoList = JSON.parse(localStorage.getItem('toDoList'));
    setToDoList(toDoList);
}, []);
  
useEffect(()=>{
  window.localStorage.setItem('toDoList', JSON.stringify(toDoList));
}, [toDoList]);
*/
const activeView = () => {
  switch (view) {
    case 1:
      return <StartForm addList={addList} setView={setView}/>;
    case 2: 
    return ( 
     <ToDoListLayout 
      onSortEnd={onSortEnd} 
      toDoList={toDoList} 
      setView={setView} 
      addList={addList} 
      addTask={addTask} 
      clearState={clearState}
      setList={setList}
      list={list}
      />
    )
    default: 
      return <StartForm addList={addList} setView={setView}/>;
  }
}

const setList = (e) => {
  setActiveList(e)
}

const addList = (userInput) => {
  let copy = [...toDoList];
  copy = [...copy, {id: toDoList.length + 1, listName: userInput, tasks:[]}];
  setToDoList(copy);
  console.log(userInput)
}

const addTask = (e) => {
  let obj = toDoList.find(obj=>obj.listName===list);
  obj.tasks.push(e);
  let copy=[...toDoList]
  let index = toDoList.indexOf(obj);
  if (index > -1) { 
    copy.splice(index, 1); 
  }
  copy=[...copy, obj]
  setToDoList(copy)
  console.log(index)
  console.log(toDoList)
}

const clearState = () => {
  setToDoList([]);
  console.log('State has been cleared');
}

const handleView = () => {
  if (view === 1) {
    return 'startForm'
  } else if (view === 2) {
    return 'toDoLayout'
  }
}

const onSortEnd = (e) => {
        let newToDoList = arrayMoveImmutable(toDoList, e.oldIndex, e.newIndex)
        setToDoList(newToDoList);
      }

  return (
      <body> 
        <header>
          <Head />
        </header>  
        <main id={handleView()}>
          {activeView()}
        </main> 
      </body>
  );
}

export default App;
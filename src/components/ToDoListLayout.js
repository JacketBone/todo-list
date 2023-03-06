import React, {useState} from 'react'
import ColumnTasks from './ColumnTasks'
import Select from 'react-select'
import ColumnCompleted from './ColumnCompleted'
import Modal from './Modal'
import useModal from './useModal'
import './App.css'

//const SortableList = SortableContainer(ColumnLists);

const ToDoListLayout = ({list, setList, addList, clearState, toDoList, addTask, onSortEnd}) => {
    const [userInput, setUserInput] = useState({list: ''});
    const [taskInput, setTaskInput] = useState({task:'', date:''});
    const {isShowing, toggle} = useModal();

    const handleListInputChange = (e) => {
        setUserInput({...userInput, list: e.currentTarget.value})
    }

    const handleTaskInputChange = (e) => {
        setTaskInput({task: e.target.value, date:taskInput.date})
    }

    const handleDateInputChange = (e) => {
        setTaskInput({task:taskInput.task, date:e.target.value})
    }

    const handleListSubmit = (e) => {
        e.preventDefault();
        addList(userInput.list);
        setUserInput({list: ''});
    }
    const handleTaskSubmit = (e) => {
        e.preventDefault();
        addTask(taskInput);
        setTaskInput({task:'', date:''});
    }

    const handleListChange = (obj)=>{
        setList(obj.value)
    }

    let options = toDoList.map((obj)=>{return({label: obj.listName, value: obj.listName})})

    return (
                <div id="doubleColumns">
                    <div id="simpleColumn">
                        <form id='addList' onSubmit={handleListSubmit}>
                            <input name="list" value={userInput.list} type='text' onChange={handleListInputChange} placeholder='List Name'></input>
                            <button>Add List</button>
                        </form>
                            <div id="selectable">
                                <Select  options={options} onChange={handleListChange}/>
                            </div>
                            <div>
                                <button onClick={clearState} type='button'>Clear Lists</button>
                            </div>
                            <div className='toDoRowInputs'>
                                <form className = 'listAndTask'>
                                    <button type='button' onClick={toggle}>Add Task</button>
                                    <Modal
                                        isShowing={isShowing}
                                        hide={toggle}
                                        handleTaskInputChange={handleTaskInputChange}
                                        handleDateInputChange={handleDateInputChange}
                                        taskInput={taskInput}
                                        handleTaskSubmit={handleTaskSubmit}
                                    />
                                </form>
                            </div>
                    </div>
                    <div className="flexColumnGrow">
                        <div>
                            <div id="listHeader">
                                <h2>Tasks</h2>
                                <div>
                                {toDoList.map((items)=>{
                                    if (items.listName===list&&items.tasks.length>0){
                                        {items.tasks.map((tasks, id)=>{
                                            console.log(tasks)
                                            return(
                                                <div id='taskColumn' key={id}>
                                                <p>{tasks}</p>
                                                </div>
                                            )
                                        })}
                                    }   
                                })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default ToDoListLayout;
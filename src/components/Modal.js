import React from "react";
import ReactDOM  from "react-dom";

const Modal = ({isShowing, hide, handleTaskInputChange, taskInput, handleTaskSubmit, handleDateInputChange}) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
         <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="toDoRow">
        <p>Enter task:</p>
        <p>Enter deadline:</p>
        </div>
        <form onSubmit={handleTaskSubmit}>
            <div className="toDoRow">
            <input className="taskSubmit" name="task" value={taskInput.task} type ='text' onChange={handleTaskInputChange} placeholder="Task Name..."></input>
            <input className="taskSubmit" type="date" value={taskInput.date||''} onChange={handleDateInputChange}></input>
            </div>
            <div style={{textAlign:"center", paddingTop: 10}}>
            <button>Submit</button>
        </div>
        </form>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;
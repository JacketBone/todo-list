import React from 'react'

const TaskName = (t) => {
console.log(t)
    return(
        <div id={t.id} key={t.id + t.task} name='task' value={t.task}>
           <p>{t.t.task}</p>
        </div>
    )
}

export default TaskName;
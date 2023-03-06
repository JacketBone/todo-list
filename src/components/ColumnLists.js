import React from 'react'
import ListName from './ListName'
import { SortableElement } from 'react-sortable-hoc'

//const SortableItem = SortableElement(ListName);

const ColumnLists = (toDoList) => {
    console.log(toDoList)
return (
    <div className='flexColumn'>
        {Object.values(toDoList).map((list) => {
            list.map((listNames, i)=>{
                return (
                    <ListName listNames={listNames} index={i} key={listNames.id} />
                )
            })
            })}
    </div>
)
}

export default ColumnLists; 
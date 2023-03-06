import React from 'react'
import Select from 'react-select'
import './App.css'

const ListName=({listNames, setList})=>{
    console.log(listNames.listName)
    return (
        <div id="listNames" key={listNames.id+listNames.listName} name='list' value={listNames.listName} style={{marginBottom:10, marginTop: 10}}>
        <Select options={listNames.listName} onClick={setList}></Select>
        </div>
    )
}

export default ListName;
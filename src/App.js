// import React from 'react';
// import './App.css';

import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState, useEffect } from "react"
import AddTask from './components/AddTask';

function App() {
  const[showAddTask, setShowAddTask]=useState(false)
  const [tasks, settasks]= useState([])

  useEffect(()=>{
    const fetchTask = async()=>{
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()
      console.log(data)
    }
    fetchTask()
  },[])

  //add tasks
  const addTask=(task)=> {
    const id = Math.floor(Math.random()*10000)+1
    console.log(id)

    const newTask = {id,...task}
    settasks([...tasks, newTask])
  }

    //delete tasks
  
  function deleteTask(id) {
    // console.log('delete', id);
    settasks(tasks.filter((task)=>task.id!==id))
  }

  //toggle reminder
  function toggleReminder(id) {
    settasks(tasks.map((task)=> task.id===id?{...task, reminder: !task.reminder}: task))
  }

  return (
    <div className="container">
      <h1></h1>
      <Header 
        title= 'Task Tracker' 
        onAdd={()=> setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
        />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length>0 ?<Tasks tasks={tasks} onDelete={deleteTask} 
      onToggle = {toggleReminder}/> : ' no tasks available'}

    </div>
  );
  }

// class App extends React.Component{
//   render(){
//     return 
//     <h1> hello from a class</h1>
    
//   }
// }

export default App;

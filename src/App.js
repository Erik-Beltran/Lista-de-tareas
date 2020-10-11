import React, { useState, useEffect } from 'react';
import './App.css';
import TaskBanner from './components/TaskBanner'
import TaskRow from './components/TaskRow'
import VisibiityControl from './components/VisibilityControl'

function App() {
  const [taskItems, setTaskItems] = useState([])
  const [task, setTask] = useState("")
  const [showCompleted, setShowClompeted] = useState(false)

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const tareasPendientes = taskItems.filter(task => task.done === false).length

  const handleSubmit = e => {
    e.preventDefault()
    setTaskItems([...taskItems, { descripcion: task, done: false }])
    setTask("")
  }

  const toggleTask = task => {
    setTaskItems(taskItems.map(t => (t.descripcion === task.descripcion ? { ...t, done: !t.done } : t)))
  }

  const isChecked = (e) => {
    setShowClompeted(preValue => !preValue)
  }

  const handleReset=(e)=>{
setTaskItems([])
  }

  useEffect(() => {
    let data = localStorage.getItem('tasks');
    if (data != null) {
      setTaskItems(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])


  return (
    <div className="App" >
      <header className="App-header">
        <TaskBanner
          handleChangeFN={handleChange}
          handleSubmitFN={handleSubmit}
          task={task} />
      </header>
      <h2>{`${tareasPendientes} Tareas pendientes`}</h2>
      <TaskRow
        arrayOfTask={taskItems.filter(task => task.done === false)}
        toggleTask={toggleTask}
      />
      <VisibiityControl
        isChecked={isChecked}
        showClompeted={showCompleted}
        taskDone={taskItems.filter(task => task.done === true)}
        toggleTask={toggleTask}
      />
      <button
        type="button"
        class="btn btn-danger"
        onClick={handleReset}>
        Reiniciar tareas
        </button>

    </div>
  );
}

export default App;

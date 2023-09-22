import React from 'react'
import TaskForm from './TaskForm'
import useHttp from '../hooks/use-http' 
import Section from '../UI/Section'

const NewTask = (props) => {
  const {isLoading, isError, sendHttpRequest : sendTask} = useHttp();

  const transformData = (taskText, data) => {
     const {name} = data;         // name key has value equal to ID
     const createdTask = { id: name , taskText:  taskText }

     props.taskHandler(createdTask);
  }

  const addTask = (task) => {
    sendTask({
      url: 'https://custom-http-hook-18d71-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({taskText: task})
    },
    transformData.bind(null, task)
    )
  }

  return (
    <Section>
      <TaskForm 
      isLoading={isLoading}
      addTask={addTask}
      />
      { isError && <p> {isError} </p>}
    </Section>
  )
}

export default NewTask

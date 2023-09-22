import React from 'react'
import TaskItem from './TaskItem'
import Section from '../UI/Section'
import classes from './Tasks.module.css'


const Tasks = ({ tasks, isLoading, isError, fetchTasks }) => {

  let content = <h2>No tasks found. Start adding some!</h2>;

  if (isLoading) {
    content = <p>Loading Tasks...</p>
  }

  if (isError) {
    content = <button onClick={fetchTasks}>Try Fetching again</button>
  }

  if (tasks.length > 0) {
    content = <ul>
      {
        tasks.map(task => {
          return content = <TaskItem key={task.id}>
            {task.taskText}
          </TaskItem>
        })
      }
    </ul>
  }


  return (
    <Section>
      <div className={classes.container}>
        {content}
      </div>
    </Section>
  )
}

export default Tasks

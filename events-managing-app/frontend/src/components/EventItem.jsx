import React from 'react'
import classes from './EventItem.module.css';
import { useSubmit, Link, useRouteLoaderData } from 'react-router-dom';


const EventItem = ({ event }) => {
  // const { event } = useLoaderData();
  const token = useRouteLoaderData('root');
  const submit = useSubmit();

  const startDeleteHandler = () => {
    submit(null, {
      method: 'DELETE',
      //specify action: 'route' if using another route's 
    })
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      {
        token && <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      }
    </article>
  )
}

export default EventItem

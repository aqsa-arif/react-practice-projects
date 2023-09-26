import { Await, Link, useLoaderData } from 'react-router-dom';

import classes from './EventsList.module.css';
import { Suspense } from 'react';

function EventsList() {
  const { events } = useLoaderData(); 

  return (
    <Suspense>
      <Await resolve={events}>
        {(loadedData) => <div className={classes.events}>
          <h1>All Events</h1>
          <ul className={classes.list}>
            {loadedData.map((event) => (
              <li key={event.id} className={classes.item}>
                <Link to={`/events/${event.id}`}>
                  <img src={event.image} alt={event.title} />
                  <div className={classes.content}>
                    <h2>{event.title}</h2>
                    <time>{event.date}</time>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>}
      </Await>
    </Suspense>

  );
}

export default EventsList;

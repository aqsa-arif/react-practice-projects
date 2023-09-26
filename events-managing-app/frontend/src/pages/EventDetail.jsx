import React, { Fragment, Suspense } from 'react'
import { Await, defer, json, redirect, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';
import { getAuthToken } from '../utils/auth';

const EventDetail = () => {
  const { event } = useRouteLoaderData('event-detail');
  // const event = data.event;

  return (
    <Fragment>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedData) =>
            <EventItem event={loadedData} />
          }
        </Await>
      </Suspense>
    </Fragment>
  )

}

export default EventDetail;



async function eventLoader(id) {
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json({
      status: 500,
      message: 'Something went wrong'
    })
  }

  const data = await response.json();
  return data.event;
}



export async function loader({ params }) {
  const id = params.eventId;

  return defer({
    event: await eventLoader(id),
  })
}

export async function action({ request, params }) {
  const id = params.eventId;

  const token = getAuthToken();
  const response = await fetch('http://localhost:8080/events/' + id, {
    method: request.method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
  });

  if (!response.ok) {
    throw json({
      status: 500,
      message: 'Something went wrong'
    })
  }

  return redirect('/events');
}
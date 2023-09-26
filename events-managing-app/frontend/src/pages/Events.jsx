import React from 'react'
import {  defer, json } from 'react-router-dom';
import EventsList from '../components/EventsList'; 

const Events = () => { 

    return <EventsList />
}

export default Events;




export async function eventsLoad() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        throw json({
            message: 'Could not fetch events',
            status: 500,
        })
    }
    const data = await response.json(); 
    return data.events;
}

export async function loader() {
    return defer({
        events: eventsLoad()
    })
}

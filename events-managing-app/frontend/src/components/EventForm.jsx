import React from 'react'
import { Form, json, redirect, useActionData, useNavigate, useNavigation } from 'react-router-dom'
import classes from './EventForm.module.css';
import { getAuthToken } from '../utils/auth';


const EventForm = ({ method, event }) => {
    const data = useActionData();

    const navigate = useNavigate();
    const navigation = useNavigation();

    const isSubmitting = navigation.state === 'submitting';

    const cancelHandler = () => {
        navigate('..');
    }

    return (
        <Form method={method} className={classes.form}>
            {
                data && data.errors && (
                    <ul>
                        {
                            Object.values(data.errors).map((error, index) => {
                                return <li key={index}>{error}</li>
                            })
                        }
                    </ul>
                )
            }
            <p>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    required
                    defaultValue={event ? event.title : ''}
                />
            </p>
            <p>
                <label htmlFor="image">Image</label>
                <input
                    id="image"
                    type="url"
                    name="image"
                    required
                    defaultValue={event ? event.image : ''}
                />
            </p>
            <p>
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    required
                    defaultValue={event ? event.date : ''}
                />
            </p>
            <p>
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    rows="5"
                    required
                    defaultValue={event ? event.description : ''}
                />
            </p>
            <div className={classes.actions}>
                <button type="button" onClick={cancelHandler}>
                    Cancel
                </button>
                <button >
                    {isSubmitting ? 'Submitting...' : 'Save'}
                </button>
            </div>
        </Form>
    )
}

export default EventForm;



export async function action({ request, params }) {
    const data = await request.formData();

    const submittedData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description')
    }

    let url = 'http://localhost:8080/events';
    if (request.method === 'PATCH') {
        const id = params.eventId;
        url = 'http://localhost:8080/events/' + id;
    }

    const token = getAuthToken(); 
    const response = await fetch(url, {
        method: request.method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(submittedData)
    })

    if (response.status === 422) {
        return response;
    }

    if (!response.ok) {
        throw json({
            status: 500,
            message: 'Something went wrong'
        })
    } 
    return redirect('..');
}
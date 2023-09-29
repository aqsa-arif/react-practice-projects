import { QueryClient } from '@tanstack/react-query'
import axios from 'axios'

export const queryClient = new QueryClient();

export async function fetchEvents({ max, search }) {
  let url = 'http://localhost:3001/events';  

  if (max) {
    url += '?max=' + max;
  }

  if(search){
    url+= '?search=' + search
  }

  try {
    const { data } = await axios.get(url);  
    return data.events; 

  } catch (error) { 
      throw error;
  } 
}


export async function createNewEvent(eventData) { 
  try {
    const {data} = await axios({
    url: `http://localhost:3001/events`,
    method: 'POST', 
    data: eventData
  });
  console.log(data);
  return data.event;

  } catch (error) {
    console.log(error);
    throw error;
  } 
}

export async function fetchSelectableImages({ signal }) {
  try {
    const {data} = await axios.get(`http://localhost:3001/events/images`, { signal });
    return data.images;
    
  } catch (error) {
    console.log(error);
    throw error;
  } 
}

export async function fetchEvent({ id, signal }) { 
  try {
    const {data} = await axios.get(`http://localhost:3001/events/${id}`, { signal }); 
    return data.event;
    
  } catch (error) {
    console.log(error);
    throw error;
  } 
}


export async function deleteEvent({ id }) {
  console.log(id);
  try {
    const {data} = await axios({
      url: `http://localhost:3001/events/${id}`,
      method: 'DELETE',
    }); 

    return data;
    
  } catch (error) {
    console.log(error);
    throw error;
  } 
}

export async function updateEvent({ id, event }) {
  try {
    const {data} = await axios({
      url: `http://localhost:3001/events/${id}`,
      method: 'PUT',
      data:  { event }, 
    });
    return data;

  } catch (error) {
    console.log(error); 
    throw error;
  }
}

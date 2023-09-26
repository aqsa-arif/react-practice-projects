import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/Root';
import Error from './pages/Error';
import Home from './pages/Home';
import Events, {loader as eventsLoader } from './pages/Events';
import Newsletter, {action as newsletterAction} from './pages/Newsletter';
import NewEvent from './pages/NewEvent';
import EventDetail, {loader as eventDetailLoader, action as deleteEventAction } from './pages/EventDetail';
import {action as manipulateEventAction} from '../src/components/EventForm';
import EditEvent from './pages/EditEvent';
import EventsRoot from './pages/EventsRoot';
import Authentication, {action as authenticateAction} from './pages/Authentication';
import { tokenLoader } from './utils/auth';
import {action as logoutAction } from './pages/Logout'


//Using relative routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    id: 'root',
    loader: tokenLoader,
    children: [
      { index: true, element: <Home /> },           // path: ''
      {
        path: 'events', element: <EventsRoot />,
        children: [
          {
            index: true, element: <Events />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true, element: <EventDetail />,
                action: deleteEventAction,
              },
              {
                path: 'edit', element: <EditEvent />,
                action: manipulateEventAction,
              },
            ]
          },
          { path: 'new', element: <NewEvent />,
           action: manipulateEventAction 
          }
        ]
      },
      { path: 'newsletter', element: <Newsletter />,
       action: newsletterAction
      },
      { path: 'auth',
       element: <Authentication />,
       action: authenticateAction
      },
      { path: 'logout', 
       action: logoutAction
      },
    ]
  }
]);


function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;

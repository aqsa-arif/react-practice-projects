import React, { Fragment } from 'react'
import { useRouteError } from 'react-router-dom'
import PageContent from '../components/PageContent';
import Navbar from '../components/Navbar';

const Error = () => {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if(error.status === 500){
    message = error.message;
  }

  if(error.status === 404){
    title = 'Not Found!';
    message = 'Could not find resource or page.';
  }

  return (
    <Fragment>
      <Navbar />
      <PageContent title={title} >
         <p>{message}</p>
      </PageContent> 
    </Fragment>
  )
}

export default Error

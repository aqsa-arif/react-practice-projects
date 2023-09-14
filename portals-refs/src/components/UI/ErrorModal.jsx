import React, {Fragment} from 'react'
import classes from './ErrorModal.module.css';
import Card from './Card'
import Button from './Button';
import  ReactDOM  from 'react-dom';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.confirm}></div>
}

const ModalOveraly = (props) => {
    return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.confirm}>Okay</Button>
      </footer>
    </Card>
    )
}

const ErrorModal = (props) => {
  return (
    <Fragment>
      {
        //ReactDOM.createPortal allows u to render component's content in different DOM heirarchy, not with the parent component. Use it when we want to render content outside of normal React tree
        ReactDOM.createPortal( <Backdrop confirm={props.removeError} />, 
        document.getElementById('backdrop-root') )
      }
      {
        ReactDOM.createPortal( <ModalOveraly confirm={props.removeError} 
        title={props.title} message={props.message} />,
        document.getElementById('modal-overlay') )
      }

    </Fragment>
  )
}

export default ErrorModal

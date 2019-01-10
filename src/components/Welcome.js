import React from 'react';
import { Alert, Jumbotron } from 'reactstrap';

const Welcome = (props) => {
  const { actionButton, actionDismiss, errorMessage } = props;

  return (
    <>
      <section className="messages">
        <Alert
          color="danger"
          isOpen={errorMessage !== ''}
          toggle={actionDismiss}
        >
          {errorMessage}
        </Alert>
      </section>
      <Jumbotron>
        <h1 className="display-3 text-center">¡Bienvenido!</h1>
        <p className="lead">Descubre el mundo de React en nuestra aplicación</p>
        <hr />
        <button
          className="btn btn-lg btn-block btn-social btn-google"
          onClick={actionButton}
        >
          <span className="fa fa-google" />
          Acceder con Google
        </button>
      </Jumbotron>
    </>
  );
}

export default Welcome;

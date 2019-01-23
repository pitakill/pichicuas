import React from 'react';
import { Alert, Jumbotron } from 'reactstrap';
import { UserContext } from './Context';

const Welcome = (props) => {
  return (
    <UserContext.Consumer>
      {
        value => (
        <>
          <section className="messages">
            <Alert
              color="danger"
              isOpen={value.state.errorMessage !== ''}
              toggle={value.onDismiss}
            >
              {value.state.errorMessage}
            </Alert>
          </section>
          <Jumbotron>
            <h1 className="display-3 text-center">¡Bienvenido!</h1>
            <p className="lead">Descubre el mundo de React en nuestra aplicación</p>
            <hr />
            <button
              className="btn btn-lg btn-block btn-social btn-google"
              onClick={value.signIn}
            >
              <span className="fa fa-google" />
              Acceder con Google
            </button>
          </Jumbotron>
        </>
      )}
    </UserContext.Consumer>
  );
}

export default Welcome;

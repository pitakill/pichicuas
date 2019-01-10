import React from 'react';
import { provider } from './firebase';
import firebase from 'firebase/app';

import {
  Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Alert, Jumbotron
} from 'reactstrap';

const initialState = {
  name: '',
  errorMessage: '',
  email: '',
  avatar: '',
  buttonMessage: 'Sign in',
  loggedIn: false
}

class App extends React.Component {
  state = initialState

  componentDidMount() {
    firebase.auth().onAuthStateChanged(this.setUser)
  }

  setUser = (user) => {
    if (user) {
      this.setState({
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL,
        buttonMessage: 'Sign out',
        loggedIn: true
      });

      return;
    }

    this.setState(initialState);
  }

  signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .catch(error => {
        this.setState({errorMessage: error.message});
      })
  }

  onDismiss = () => {
    this.setState({errorMessage: ''});
  }

  signOut = () => {
    firebase.auth().signOut()
  }

  renderCard = () => {
    const { avatar, email, name, buttonMessage } = this.state;

    return (
      <Card style={{width: '350px'}}>
        <CardImg top width="100%" src={avatar} alt={name} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{email}</CardSubtitle>
          <br />
          <Button onClick={this.signOut}>{buttonMessage}</Button>
        </CardBody>
      </Card>
    )
  }

  renderJumbotron = () => {
    return (
      <Jumbotron>
        <h1 className="display-3 text-center">¡Bienvenido!</h1>
        <p className="lead">Descubre el mundo de React en nuestra aplicación</p>
        <hr />
        <button className="btn btn-lg btn-block btn-social btn-google" onClick={this.signIn}>
          <span className="fa fa-google" />
          Acceder con Google
        </button>
      </Jumbotron>
    );
  }

  render() {
    return (
      <>
        <Alert
          color="danger"
          isOpen={this.state.errorMessage !== ''}
          toggle={this.onDismiss}
        >
          {this.state.errorMessage}
        </Alert>

        {
          this.state.loggedIn
            ? this.renderCard()
            : this.renderJumbotron()
        }
      </>
    );
  }
}

export default App;

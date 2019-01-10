import React from 'react';
import { provider } from '../firebase';
import firebase from 'firebase/app';

import Dashboard from './Dashboard';
import Welcome from './Welcome';

const initialState = {
  name: '',
  errorMessage: '',
  email: '',
  avatar: '',
  buttonMessage: '',
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
        buttonMessage: 'Cerrar sesión',
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

  render() {
    return (
      this.state.loggedIn
        ? <Dashboard {...this.state} action={this.signOut} />
        : <Welcome
            actionButton={this.signIn}
            actionDismiss={this.onDismiss}
            errorMessage={this.state.errorMessage}
          />
    );
  }
}

export default App;

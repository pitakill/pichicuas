import React from 'react';
import { provider } from './firebase';
import firebase from 'firebase/app';

const initialState = {
  name: 'Jone Doe',
  email: 'foo@bar.com',
  avatar: '',
  buttonMessage: 'Sign in',
  loggedIn: false
}

class App extends React.Component {
  state = initialState

  signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(response => {
        this.setState({
          name: response.user.displayName,
          email: response.user.email,
          avatar: response.user.photoURL,
          buttonMessage: 'Sign out',
          loggedIn: true
        })
      })
      .catch(console.error)
  }

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState(initialState)
      })
      .catch(console.error)
  }

  render() {
    return (
      <>
        { this.state.loggedIn ? <p>Bienvenido:</p> : null }
        <div>{this.state.name}</div>
        <div>{this.state.email}</div>
        <img src={this.state.avatar} alt={this.state.name}/>
        <hr />
        <button onClick={this.state.loggedIn ? this.signOut : this.signIn }>{this.state.buttonMessage}</button>
      </>
    );
  }
}

export default App;

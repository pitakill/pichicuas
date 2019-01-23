import React from 'react';
import { provider } from '../firebase';
import firebase from 'firebase/app';
import { navigate } from '@reach/router';

const UserContext = React.createContext();

const initialState = {
  name: '',
  errorMessage: '',
  email: '',
  avatar: '',
  buttonMessage: '',
  loggedIn: false
}

class Context extends React.Component {
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
      }, () => navigate('dashboard'));

      return;
    }

    this.setState(initialState, () => navigate('/'));
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
    const userAuth = {
      state: {...this.state},
      signIn: this.signIn,
      signOut: this.signOut,
      onDismiss: this.onDismiss,
    };

    return (
      <UserContext.Provider value={{...userAuth}}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}



export default Context;

export {
  UserContext
}

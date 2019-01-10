import React from 'react';
import { provider } from './firebase';
import firebase from 'firebase/app';

import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const initialState = {
  name: 'John Doe',
  email: 'foo@bar.com',
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
      .catch(console.error)
  }

  signOut = () => {
    firebase.auth().signOut()
  }

  renderCard = () => {
    const { avatar, email, name, buttonMessage } = this.state;

    return (
      <Card style={{width: '200px'}}>
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

  render() {
    return (
      <>
        {
          this.state.loggedIn
            ? this.renderCard()
            : <Button onClick={this.signIn}>{this.state.buttonMessage}</Button>
        }
      </>
    );
  }
}

export default App;

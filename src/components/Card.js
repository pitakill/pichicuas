import React from 'react';
import {
  Card as CardReactstrap, CardImg, CardBody, CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { UserContext } from './Context';

const styles = {
  position: 'absolute',
  right: '1rem',
  top: '1rem',
  width: '200px',
};

const Card = ({ action, avatar, email, name, buttonMessage }) => {
  return (
    <UserContext.Consumer>
      {
        value => (
          <CardReactstrap style={styles}>
            <CardImg top width="100%" src={value.state.avatar} alt={name} />
            <CardBody>
              <CardTitle>{value.state.name}</CardTitle>
              <CardSubtitle>{value.state.email}</CardSubtitle>
              <br />
              <Button onClick={value.signOut}>{value.state.buttonMessage}</Button>
            </CardBody>
          </CardReactstrap>
        )
      }
    </UserContext.Consumer>
  );
}

export default Card;

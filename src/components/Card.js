import React from 'react';
import {
  Card as CardReactstrap, CardImg, CardBody, CardTitle, CardSubtitle, Button
} from 'reactstrap';

const styles = {
  position: 'absolute',
  right: '1rem',
  top: '1rem',
  width: '200px',
};

const Card = ({ action, avatar, email, name, buttonMessage }) => {
  return (
    <CardReactstrap style={styles}>
      <CardImg top width="100%" src={avatar} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{email}</CardSubtitle>
        <br />
        <Button onClick={action}>{buttonMessage}</Button>
      </CardBody>
    </CardReactstrap>
  );
}

export default Card;

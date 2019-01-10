import React from 'react';
import {
  Card, CardImg, CardBody, CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Dashboard = (props) => {
  const { action, avatar, email, name, buttonMessage } = props;

  return (
    <Card style={{width: '350px'}}>
      <CardImg top width="100%" src={avatar} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{email}</CardSubtitle>
        <br />
        <Button onClick={action}>{buttonMessage}</Button>
      </CardBody>
    </Card>
  )
}

export default Dashboard;

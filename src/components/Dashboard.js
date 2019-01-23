import React from 'react';
import {
  Container, Row, Col
} from 'reactstrap';

import Card from './Card';
import Chart from './Chart';

const Dashboard = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Chart />
        </Col>
      </Row>
      <Card />
    </Container>
  )
}

export default Dashboard;

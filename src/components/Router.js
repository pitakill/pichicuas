import React from 'react'
import { Router as ReachRouter } from '@reach/router';

import Dashboard from './Dashboard';
import Welcome from './Welcome';

function Router (props) {
  return (
    <ReachRouter>
      <Dashboard path='dashboard' />
      <Welcome path='/' />
    </ReachRouter>
  )
}

export default Router;

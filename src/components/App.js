import React from 'react';
import Context from './Context';
import Router from './Router';

const App = () => (
  <Context>
    <Router />
  </Context>
);

export default App;

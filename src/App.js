import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <HashRouter>
        {routes}
      </HashRouter>
    </div>
  );
}

export default App;

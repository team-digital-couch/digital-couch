import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify'
import routes from './routes';
import 'react-toastify/dist/ReactToastify.css'

toast.configure({
  autoClose: 3000,
  draggable: false,
  position: toast.POSITION.BOTTOM_RIGHT
})

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <HashRouter>
        {routes}
      </HashRouter>
    </div>
  );
}

export default App;

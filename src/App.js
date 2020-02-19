import React from 'react';
import './App.css';
import {ToastContainer, toast} from 'react-toastify'
import routes from './routes';
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import 'react-toastify/dist/ReactToastify.css'
import {withRouter} from 'react-router-dom'

toast.configure({
  autoClose: 3000,
  draggable: false,
  position: toast.POSITION.BOTTOM_RIGHT
})

function App(props) {
  console.log(props.location.pathname)
  return (
    <div className="App">
      <ToastContainer />
      {/* <Header /> */}
        {props.location.pathname == '/' || props.location.pathname == '/register' ? null : <Header />}
        <div className='main-container'>
          {props.location.pathname == '/' || props.location.pathname == '/register' ? null : <NavBar />}
          <div className='routes-container'>
            {routes}
          </div>
        </div>
    </div>
  );
}

export default withRouter(App);

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'

class NavBar extends Component {
    render() {
        return (
            <div className='navbar-container'>
                <Link to='/dashboard'><div>Home</div></Link>
                <Link to='/journal'><div>Journal</div></Link>
                <Link to='/timeline'><div>Timeline</div></Link>
            </div>
        )
    }
}

export default NavBar

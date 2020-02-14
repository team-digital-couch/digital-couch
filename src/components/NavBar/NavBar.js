import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                <Link to='/dashboard'><div>Home</div></Link>
                <Link to='/journal'><div>Journal</div></Link>
                <Link to='/timeline'><div>Timeline</div></Link>
            </div>
        )
    }
}

export default NavBar

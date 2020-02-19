import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import {getMe} from '../../redux/reducers/userReducer';
import { connect } from 'react-redux';

class NavBar extends Component {

    render() {
        return (
            <div className='navbar-container'>
                <section>
                    <Link id='dashboard' className='link-tabs' to='/dashboard'><div>Home</div></Link>
                    <Link id='journal' className='link-tabs' to='/journal'><div>Journal</div></Link>
                    <Link id='timeline' className='link-tabs' to='/timeline'><div>Timeline</div></Link>
                    {(this.props.isProvider === true? 
                    <Link id='providerNotes' className='link-tabs' to='/notes'><div>Provider Notes</div></Link>
                    :null)}
                </section>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return{
        isProvider: reduxState.userReducer.isProvider
    }
}

export default connect(mapStateToProps, {getMe})(NavBar) 

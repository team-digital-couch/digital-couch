import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getMe} from '../../redux/reducers/userReducer'
import logo from '../../temp_logo.jpg'

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.props.getMe()
    }

    render() {
        return (
            <div className='header-container'>
                <div className='header-logo-container'>
                    <img src={logo} alt='Logo' />
                    <span>Digital Couch</span>
                </div>
                <div className='header-menu-container'>
                    <i className='far fa-bell' />
                    <img src={this.props.avatar} alt='Avatar' />
                </div>
            </div>
        )
    }
}

const checkout = state => ({
    userId: state.userReducer.userId,
    username: state.userReducer.username,
    avatar: state.userReducer.avatar
})

export default connect(checkout, {getMe})(Header)
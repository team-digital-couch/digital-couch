import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getMe, logoutUser} from '../../redux/reducers/userReducer'
import logo from '../../digital-couch-logo.png'
import './Header.css'

export class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
    }

    componentDidMount() {
        this.props.getMe()
    }

    componentDidUpdate(prevProps) {
        if(!this.props.userLoading && prevProps.userLoading && !this.props.userId) {
            this.props.history.push('/')
        }
    }

    toggleModal = () => {
        this.setState({showModal: !this.state.showModal})
    }

    logout = () => {
        this.props.logoutUser()
        this.props.history.push('/')
    }

    render() {
        return (
            <div className='header-container'>
                <div className='header-logo-container'>
                    <img id='logo' src={logo} alt='Logo' />
                    {/* <span>Digital Couch</span> */}
                </div>
                <div className='header-menu-container'>
                    <i className='far fa-bell' />
                    <img className='header-avatar' src={this.props.avatar} alt='Avatar' onClick={this.toggleModal} />
                    <div className={`modal${this.state.showModal ? '__show' : '__hide'}`}>
                        <button onClick={this.logout}>Logout</button>
                    </div>
                    {/* <img src='https://res.cloudinary.com/wandsattheready/image/upload/v1581526662/digital-couch/default_avatar_mi2yrs.png' alt='avatar' /> */}
                </div>
            </div>
        )
    }
}

const checkout = state => ({
    userId: state.userReducer.userId,
    username: state.userReducer.username,
    avatar: state.userReducer.avatar,
    userLoading: state.userReducer.userLoading
})

export default connect(checkout, {getMe, logoutUser})(withRouter(Header))
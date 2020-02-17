import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { registerUser } from '../../redux/reducers/userReducer';
import logo from '../../digitalCouchLogo.svg'
import './Register.css'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            email: '',
            isProvider: false
        }
    }

    componentDidUpdate(prevProps) {
        console.log(this.props.userLoading, prevProps.userLoading)
        if(prevProps.userLoading == true) {
            this.props.history.push('/dashboard')
        }
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleBoxClick = (e) => {
        this.setState({ isProvider: !this.state.isProvider})
    }

    registerLocal = () => {
        const { username, password, isProvider, email } = this.state
        this.setState({
            username: '',
            password: '',
            email: '',
            isProvider: false
        })
        this.props.registerUser({ username, password, isProvider, email })
    }

    render() {
        return (
            <div className='register-container'>
                <img src={logo} alt='Logo' className='register-logo' />
                <div className='register-box'>
                    <input name='username' placeholder='Username' onChange={this.handleInputChange} value={this.state.username}></input>
                    <input type='password' name='password' placeholder='Password' onChange={this.handleInputChange} value={this.state.password}></input>
                    <input type='email' name='email' placeholder='Email' onChange={this.handleInputChange} value={this.state.email}></input>
                    <div className='register-check'>Are You a Provider?<input type='checkbox' onChange={this.handleBoxClick} checked={this.state.isProvider} /></div>
                    {/* <Link to='/dashboard'><button onClick={this.registerLocal}>Register</button></Link> */}
                    <button onClick={this.registerLocal}>Register</button>
                    <p>Already have an Account? Login <Link to='/'>Here</Link></p>
                </div>
            </div>
        )
    }
}

const checkout = state => ({
    userId: state.userReducer.userId,
    userLoading: state.userReducer.userLoading
})

export default connect(checkout, {registerUser})(withRouter(Register))

import React, { Component } from 'react';
import { registerUser } from '../redux/reducers/userReducer';

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
            <div>
                <input name='username' placeholder='Username' onChange={this.handleInputChange} value={this.state.username}></input>
                <input type='password' name='Password' placeholder='Password' onChange={this.handleInputChange} value={this.state.password}></input>
                <input type='email' name='Email' placeholder='Email' onChange={this.handleInputChange} value={this.state.email}></input>
                Are You a Provider?<input type='checkbox' onChange={this.handleBoxClick} checked={this.state.isProvider} />
                <button onClick={this.registerLocal}>Register</button>
            </div>
        )
    }
}

export default Register

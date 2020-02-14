import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../../redux/reducers/userReducer';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    loginLocal = () => {
        const { username, password } = this.state
        this.setState({
            username: '',
            password: ''
        })
        this.props.loginUser({ username, password })
    }

    render() {
        return (
            <div>
                <input name='username' placeholder='Username' onChange={this.handleInputChange} value={this.state.username}></input>
                <input type='password' name='password' placeholder='Password' onChange={this.handleInputChange} value={this.state.password}></input>
                <button onClick={this.loginLocal}>Login</button>
                <p>Need an Account? Register <Link to='/register'>Here</Link></p>
            </div>
        )
    }
}

export default connect(undefined, {loginUser})(Login)

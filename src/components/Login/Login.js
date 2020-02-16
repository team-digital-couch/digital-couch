import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { loginUser } from '../../redux/reducers/userReducer';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
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
                {/* <Link to='/dashboard'><button onClick={this.loginLocal}>Login</button></Link> */}
                <button onClick={this.loginLocal}>Login</button>
                <p>Need an Account? Register <Link to='/register'>Here</Link></p>
            </div>
        )
    }
}

const checkout = state => ({
    userId: state.userReducer.userId,
    userLoading: state.userReducer.userLoading
})

export default connect(checkout, {loginUser})(withRouter(Login))

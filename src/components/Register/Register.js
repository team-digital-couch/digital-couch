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
            isProvider: false,
            valid: {
                username: false,
                password: false,
                email: false
            },
            submitted: false
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

    validate = () => {
        const valid = {
            username: false,
            email: false,
            password: false
        }

        if(this.state.username) {
            // this.setState({valid: {
            //     ...this.state.valid,
            //     username: true
            // }})
            valid.username = true
        }

        if(this.state.password) {
            // this.setState({valid: {
            //     ...this.state.valid,
            //     password: true
            // }})
            valid.password = true
        }

        if(this.state.email) {
            // this.setState({valid: {
            //     ...this.state.valid,
            //     email: true
            // }})
            valid.email = true
        }

        console.log('validation', this.state.valid)

        this.setState({
            submitted: true,
            valid
        })

        return this.state.valid.username && this.state.valid.password && this.state.valid.email
    }

    registerLocal = () => {
        const { username, password, isProvider, email } = this.state
        
        if(this.validate()) {
            this.setState({
                username: '',
                password: '',
                email: '',
                isProvider: false
            })
            this.props.registerUser({ username, password, isProvider, email })
        }
    }

    render() {
        return (
            <div className='register-container'>
                <img id='reg-logo' src={logo} alt='Logo' className='register-logo' />
                <div className='register-box'>
                    <span className='notification' hidden={!this.state.submitted && !this.state.valid.username && !this.state.valid.email && !this.state.valid.password}>Please fix the highlighted fields before continuing</span>
                    <input name='username' placeholder='Username' className={this.state.submitted && !this.state.valid.username ? 'invalid' : 'valid'} onChange={this.handleInputChange} value={this.state.username}></input>
                    <input type='email' name='email' placeholder='Email' className={this.state.submitted && !this.state.valid.email ? 'invalid' : 'valid'} onChange={this.handleInputChange} value={this.state.email}></input>
                    <input type='password' name='password' placeholder='Password' className={this.state.submitted && !this.state.valid.password ? 'invalid' : 'valid'} onChange={this.handleInputChange} value={this.state.password}></input>
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

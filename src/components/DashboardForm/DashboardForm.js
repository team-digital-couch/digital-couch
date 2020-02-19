import React, { Component } from 'react'
import {connect} from 'react-redux'
import {updateInfo} from '../../redux/reducers/userReducer'
require('dotenv').config();

class DashboardForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            avatar: props.info.avatar,
            insurance_card: props.info.insurance_card,
            first_name: props.info.first_name,
            last_name: props.info.last_name,
            pronouns: props.info.pronouns,
            phone: props.info.phone,
            email: props.info.email,
            billing_address: props.info.billing_address,
            billing_city: props.info.billing_city,
            billing_zipcode: props.info.billing_zipcode,
            address: props.info.address,
            city: props.info.city,
            zipcode: props.info.zipcode,
            hours: props.info.hours,
            bio: props.info.bio
        }
    }

    componentDidUpdate(prevProps) {
        if(!this.props.userLoading && prevProps.userLoading) {
            this.props.closeForm()
        }
    }

    checkUploadResult = (error, resultEvent, key) => {
        if (resultEvent.event === 'success') {
        this.setState({ [key]: resultEvent.info.url })
        }   
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleUploadClick = key => {
        let widget
        console.log(key)
        if(window.cloudinary) {
            console.log(process.env.REACT_APP_cloudName)
            widget = window.cloudinary.createUploadWidget(
                {
                    cloudName: `${process.env.REACT_APP_cloudName}`,
                    uploadPreset: `${process.env.REACT_APP_uploadPreset}`,
                    sources: ["local", "url", "facebook", "instagram"],
                    Default: false
                },
                (error, result) => {
                    this.checkUploadResult(error, result, key)
                    this.checkUploadResult(error, result, key)
                })
            widget.open()
        }
    }

    testClick = () => {
        console.log('hit')
    }

    submit = () => {
        const {first_name, last_name, pronouns, avatar, insurance_card, phone, email, billing_address, billing_city, billing_zipcode, address, city, zipcode, hours, bio} = this.state
        this.props.updateInfo(this.props.info.id, {first_name, last_name, pronouns, avatar, insurance_card, phone, email, billing_address, billing_city, billing_zipcode, address, city, zipcode, hours, bio})
    }

    render() {


        return (
            <div>
                <input type='hidden' name='avatar' onChange={this.handleInputChange} value={this.state.avatar} />
                <img src={this.state.avatar} alt='Avatar' />
                <button onClick={() => this.handleUploadClick('avatar')}>Select Avatar Image</button>
                <input name='first_name' placeholder='First Name' onChange={this.handleInputChange} value={this.state.first_name} />
                <input name='last_name' placeholder='Last Name' onChange={this.handleInputChange} value={this.state.last_name} />
                <input name='pronouns' placeholder='Pronouns (ex. "she/her")' onChange={this.handleInputChange} value={this.state.pronouns} />
                {this.props.isProvider ? null : (
                    <div>
                        <input type='hidden' name='insurance_card' onChange={this.handleInputChange} value={this.state.insurance_card} />
                        <img src={this.state.insurance_card} alt='Insurance card' />
                        <button onClick={() => this.handleUploadClick('insurance_card')}>Select Insurance Card Image</button>
                    </div>
                )}
                <input name='phone' placeholder='Phone Number' onChange={this.handleInputChange} value={this.state.phone} />
                <input name='email' placeholder='Email' onChange={this.handleInputChange} value={this.state.email}  />
                {this.props.isProvider ? null : (
                    <div>
                        <input name='billing_address' placeholder='Billing Address' onChange={this.handleInputChange} value={this.state.billing_address} />
                        <input name='billing_city' placeholder='Billing City' onChange={this.handleInputChange} value={this.state.billing_city} />
                        <input name='billing_zipcode' placeholder='Billing Zipcode' onChange={this.handleInputChange} value={this.state.billing_zipcode} />
                    </div>
                )}
                <input name='address' placeholder='Address' onChange={this.handleInputChange} value={this.state.address} />
                <input name='city' placeholder='City' onChange={this.handleInputChange} value={this.state.city} />
                <input name='zipcode' placeholder='Zipcode' onChange={this.handleInputChange} value={this.state.zipcode} />
                {!this.props.isProvider ? null : (<input name='hours' placeholder='Business Hours' onChange={this.handleInputChange} value={this.state.hours} />)}
                <textarea name='bio' placeholder='Tell us about you...' onChange={this.handleInputChange} value={this.state.bio} />
                <button onClick={this.submit}>Save Changes</button>
                <button onClick={this.props.closeForm}>Cancel</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    info: reduxState.userReducer.info,
    isProvider: reduxState.userReducer.isProvider,
    userLoading: reduxState.userReducer.userLoading
})

export default connect(mapStateToProps, {updateInfo})(DashboardForm)

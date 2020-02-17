import React, { Component } from 'react'
import {connect} from 'react-redux'
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

    handleUploadClick = e => {
        let widget 
        if(window.cloudinary) {
            widget = window.cloudinary.createUploadWidget(
                {
                    cloudName: `${process.env.REACT_APP_cloudName}`,
                    uploadPreset: `${process.env.REACT_APP_uploadPreset}`,
                    sources: ["local", "url", "facebook", "instagram"],
                    Default: false
                },
                (error, result) => {
                    this.checkUploadResult(error, result, e.target.name)
                    this.checkUploadResult(error, result, e.target.name)
                })
            widget.open()
        }
    }

    render() {


        return (
            <div>
                <input type='hidden' name='avatar' onChange={this.handleInputChange} value={this.state.avatar} />
                <img src={this.state.avatar} alt='Avatar' />
                <button name='avatar' onClick={e => this.handleUploadClick}>Select Image</button>
                <input name='first_name' onChange={this.handleInputChange} value={this.state.first_name} />
                <input name='last_name' onChange={this.handleInputChange} value={this.state.last_name} />
                <input name='prounous' onChange={this.handleInputChange} value={this.state.pronouns} />
                {this.props.isProvider ? null : (
                    <div>
                        <input type='hidden' name='insurance_card' onChange={this.handleInputChange} value={this.state.insurance_card} />
                        <img src={this.state.insurance_card} alt='Insurance card' />
                        <button name='insurance_card' onClick={e => this.handleUploadClick}>Select Image</button>
                    </div>
                )}
                <input name='phone' onChange={this.handleInputChange} value={this.state.phone} />
                <input name='email' onChange={this.handleInputChange} value={this.state.email}  />
                {this.props.isProvider ? null : (
                    <div>
                        <input name='billing_address' onChange={this.handleInputChange} value={this.state.billing_address} />
                        <input name='billing_city' onChange={this.handleInputChange} value={this.state.billing_city} />
                        <input name='billing_zipcode' onChange={this.handleInputChange} value={this.state.billing_zipcode} />
                    </div>
                )}
                <input name='address' onChange={this.handleInputChange} value={this.state.address} />
                <input name='city' onChange={this.handleInputChange} value={this.state.city} />
                <input name='zipcode' onChange={this.handleInputChange} value={this.state.zipcode} />
                {!this.props.isProvider ? null : (<input name='hours' onChange={this.handleInputChange} value={this.state.hours} />)}
                <textarea name='bio' onChange={this.handleInputChange} value={this.state.bio} />
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    info: reduxState.userReducer.info,
    isProvider: reduxState.userReducer.isProvider
})

export default connect(mapStateToProps)(DashboardForm)

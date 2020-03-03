import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getUserInfo, getClients, selectClient, clearClient, approveConnection} from '../../redux/reducers/userReducer';
import DashboardForm from '../DashboardForm/DashboardForm'
import './Dashboard.css'

export class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            showForm: false
        }
    }

    componentDidUpdate(prevProps) {
        if(!this.props.userLoading && prevProps.userLoading) {
            console.log('selectedClient', this.props.selectedClient)
            if(this.props.selectedClient) {
                this.props.getUserInfo(this.props.selectClient)
            } else {
                this.props.getUserInfo()
            }
    
            if(this.props.isProvider && !this.props.selectedClient) {
                this.props.getClients()
            }
        }
        if(!this.props.connectionLoading && prevProps.connectionLoading) {
            this.props.getUserInfo()
        }
    }

    setClient = id => {
        this.props.selectClient(id)
        this.props.getUserInfo(id)
    }

    unsetClient = () => {
        this.props.clearClient()
        this.props.getUserInfo()
    }

    toggleForm = () => {
        this.setState({showForm: !this.state.showForm})
    }

    approve = () => {
        this.props.approveConnection(this.props.userInfo.connection_id)
    }

    render() {

        const info = (
            <div className='dashboard-info-container'>
                <div className='dashboard-info-all'>
                    <div className='dashboard-info basic'>
                        <h1 className='dashboard-info-category-name'>Basic Info:</h1>
                        <div className='info-container'>
                            <div className='dashboard-info-avatar-container'>
                                <img src={this.props.userInfo.avatar} alt='Avatar' />
                            </div>
                            <div>
                                <span className='username basic-info'><span className='dashboard-info-title'>Username: </span>{this.props.userInfo.username}</span>
                                <span className='name basic-info'><span className='dashboard-info-title'>Name: </span>{this.props.userInfo.first_name} {this.props.userInfo.last_name}</span>
                                <span className='pronouns basic-info'><span className='dashboard-info-title'>Pronouns: </span>{this.props.userInfo.pronouns}</span>
                            </div>
                        </div>
                    </div>
                    <div className='dashboard-info insurance'>
                        <h1>Insurance Info:</h1>
                        <div>
                            <div className='dashboard-info-insurance-card-container'>
                                <img src={this.props.userInfo.insurance_card} alt='Insurance card' />
                            </div>
                        </div>
                    </div>
                    <div className='dashboard-info contact'>
                        <h1>Contact Info:</h1>
                        <div>
                            <div className='dashboard-info-contact-sub'>
                                <h2>Phone/Email:</h2>
                                <div><span className='dashboard-info-title'>Phone: </span>{this.props.userInfo.phone}</div>
                                <div><span className='dashboard-info-title'>Email: </span>{this.props.userInfo.email}</div>
                            </div>
                            <div className='dashboard-info-contact-sub'>
                                <h2>{this.props.isProvider ? 'Business Address' : 'Residence Address'}:</h2>
                                <div><span className='dashboard-info-title'>Address: </span>{this.props.userInfo.address}</div>
                                <div><span className='dashboard-info-title'>City: </span>{this.props.userInfo.city}</div>
                                <div><span className='dashboard-info-title'>Zipcode: </span>{this.props.userInfo.zipcode}</div>
                            </div>
                            {this.props.isProvider ? null : (
                                <div className='dashboard-info-contact-sub'>
                                    <h2>Billing Info:</h2>
                                    <div><span className='dashboard-info-title'>Address: </span>{this.props.userInfo.billing_address}</div>
                                    <div><span className='dashboard-info-title'>City: </span>{this.props.userInfo.billing_city}</div>
                                    <div><span className='dashboard-info-title'>Zipcode: </span>{this.props.userInfo.billing_zipcode}</div>
                                </div>
                            )}
                        </div>
                    </div>
                    {!this.props.isProvider ? null : (
                        <div className='dashboard-info hours'>
                            <h1>Business Hours: </h1>
                            <div>
                                <span>{this.props.userInfo.hours}</span>
                            </div>
                        </div>
                    )}
                    <div className='dashboard-info bio'>
                        <h1>Bio:</h1>
                        <div>
                            <p>{this.props.userInfo.bio}</p>
                        </div>
                    </div>
                </div>
            </div>
        )

        const clients = this.props.clients ? this.props.clients.map(v => <div className='provider-client' onClick={() => this.setClient(v.client_id)} key={v.connection_id}>{v.username}</div>) : null

        return (
            <div id='whole-page'>
                {this.state.showForm ? <DashboardForm closeForm={this.toggleForm} /> : (
                    <div className='info-container'>
                        <div className='button-container'>
                            {this.props.selectedClient ? <button onClick={this.unsetClient}>Back</button> : null }<button className='search-button' onClick={() => this.props.history.push('/search')}>Search for connections</button>
                            {!this.props.selectedClient ? <button onClick={this.toggleForm}>Edit</button> : null}
                        </div>
                        {info}
                        {!this.props.isProvider ? null : (
                            <div className='client-section'>
                                {!this.props.selectedClient ? <h1 className='client-header'>Clients: </h1> : null}
                                {!this.props.selectedClient ? clients : null}
                            </div>
                        )}
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    isProvider: reduxState.userReducer.isProvider,
    clients: reduxState.userReducer.clients,
    selectedClient: reduxState.userReducer.selectedClient,
    userInfo: reduxState.userReducer.info,
    userLoading: reduxState.userReducer.userLoading,
    connectionLoading: reduxState.userReducer.connectionLoading
})

export default connect(mapStateToProps, {getUserInfo, getClients, selectClient, clearClient, approveConnection})(Dashboard)

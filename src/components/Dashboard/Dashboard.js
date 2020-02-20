import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import {getUserInfo, getClients, selectClient, clearClient, approveConnection} from '../../redux/reducers/userReducer';
import DashboardForm from '../DashboardForm/DashboardForm'
import './Dashboard.css'

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            showForm: false
        }
    }

    componentDidMount() {

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
        // this.props.history.push(`/clientInfo/${id}`)
        this.props.getUserInfo(id)
    }

    unsetClient = () => {
        this.props.clearClient()
        // this.props.history.push('/dashboard')
        this.props.getUserInfo()
    }

    toggleForm = () => {
        this.setState({showForm: !this.state.showForm})
    }

    approve = () => {
        this.props.approveConnection(this.props.userInfo.connection_id)
    }

    render() {
        console.log(this.props.userInfo)
        const info = Object.keys(this.props.userInfo).map((v, i) => {
            switch(v) {
                case 'id':
                case 'user_id':
                    break;
                case 'avatar':
                case 'insurance_card':
                    if((this.props.isProvider && !this.props.selectedClient) && v == 'insurance_card') break;
                    return (
                        <div key={i}>
                            <img id='user-pic' src={this.props.userInfo[v]} alt={v} /> 
                        </div>
                    )
                case 'billing_address':
                case 'billing_city':
                case 'billing_zipcode':
                    if(this.props.isProvider) return null;
                case 'provider_name':
                    if(!this.props.userInfo[v]) break;
                    return (
                        <div key={i}>
                            <span>{this.props.userInfo[v]}</span><button onClick={this.props.userInfo.pending ? this.approve : this.disconnect}>{this.props.userInfo.pending ? 'Approve' : 'Disconnect'}</button>
                        </div>
                    )
                case 'pending':
                case 'connection_id':
                    break;
                case 'hours':
                    if(!this.props.isProvider) return null;
                default:
                    return (
                        <div key={i}>
                            <h1>{v}: </h1><span>{this.props.userInfo[v]}</span><br />
                        </div>
                    )
            }   
            // )
        })
        console.log(this.props.userInfo, info)

        const clients = this.props.clients ? this.props.clients.map(v => <div className='provider-client' onClick={() => this.setClient(v.client_id)} key={v.connection_id}>{v.username}</div>) : null
        console.log('clients here', clients)

        return (
            <div id='whole-page'>
                {this.state.showForm ? <DashboardForm closeForm={this.toggleForm} /> : (
                    <div className='info-container'>
                        {this.props.selectedClient ? <button onClick={this.unsetClient}>Back</button> : null }<button className='search-button' onClick={() => this.props.history.push('/search')}>Search for connections</button>
                        {info}
                        {!this.props.selectedClient ? clients : null}
                        {/* {clients} */}
                        {!this.props.selectedClient ? <button onClick={this.toggleForm}>Edit</button> : null}
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

export default connect(mapStateToProps, {getUserInfo, getClients, selectClient, clearClient, approveConnection})(withRouter(Dashboard))

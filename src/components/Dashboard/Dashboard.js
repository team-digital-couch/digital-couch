import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import {getUserInfo, getClients, selectClient, clearClient} from '../../redux/reducers/userReducer';
import DashboardForm from '../DashboardForm/DashboardForm'

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            showForm: false
        }
    }

    componentDidMount() {
        // if(!this.props.userLoading && prevProps.userLoading) {
            if(this.props.selectedClient) {
                this.props.getUserInfo(this.props.match.params.clientId)
            } else {
                this.props.getUserInfo()
            }
    
            if(this.props.isProvider && !this.props.selectedClient) {
                this.props.getClients()
            }
        // }
    }

    setClient = id => {
        this.props.selectClient(id)
        this.props.history.push(`/clientInfo/${id}`)
    }

    unsetClient = () => {
        this.props.clearClient()
        this.props.history.push('/dashboard')
    }

    toggleForm = () => {
        this.setState({showForm: !this.state.showForm})
    }

    render() {
        const info = Object.keys(this.props.userInfo).map((v, i) => {
            switch(v) {
                case 'id':
                case 'user_id':
                    break;
                case 'avatar':
                case 'insurance_card':
                    if(this.props.isProvider && v == 'insurance_card') break;
                    return (
                        <div>
                            <img src={this.props.userInfo[v]} alt={v} /> 
                        </div>
                    )
                case 'provider_name':
                    if(!this.props.userInfo[v]) break;
                    return (
                        <div>
                            <span>{this.props.userInfo[v]}</span><button onClick={this.props.userInfo.pending ? this.approve : this.disconnect}>{this.props.userInfo.pending ? 'Approve' : 'Disconnect'}</button>
                        </div>
                    )

                case 'pending':
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

        const clients = this.props.clients ? this.props.clients.map(v => <div className='provider-client' onClick={() => this.setClient(v.id)} key={v.id}>{v.name}</div>) : null

        return (
            <div>
                {this.state.showForm ? <DashboardForm closeForm={this.toggleForm} /> : (
                    <div>
                        <button >Back</button><button onClick={() => this.props.history.push('/search')}>Search for connections</button>
                        {info}
                        {clients && !this.props.selectedClient ? clients : null}
                        <button onClick={this.toggleForm}>Edit</button>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    isProvider: reduxState.userReducer.isProvider,
    selectedClient: reduxState.userReducer.selectedClient,
    userInfo: reduxState.userReducer.info,
    userLoading: reduxState.userReducer.userLoading
})

export default connect(mapStateToProps, {getUserInfo, getClients, selectClient, clearClient})(withRouter(Dashboard))

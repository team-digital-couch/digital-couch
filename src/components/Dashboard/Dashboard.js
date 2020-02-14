import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import {getUserInfo, getClients, setClient, clearClient} from '../../redux/reducers/userReducer';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
                 
        }
    }

    componentDidMount() {
        if(this.props.selectedClient) {
            this.props.getUserInfo(this.props.match.params.clientId)
        } else {
            this.props.getUserInfo()
        }

        if(this.props.isProvider) {
            this.props.getClients()
        }
    }

    setClient = id => {
        this.props.setClient(id)
        this.props.history.push(`/clientInfo/${id}`)
    }

    unsetClient = () => {
        this.props.clearClient()
        this.props.history.push('/dashboard')
    }

    render() {
        const info = this.props.userInfo.keys().map(v => <div key={v.id}><h1>{v}: </h1><span>this.props.userInfo[v]</span><br /></div>)

        const clients = this.props.clients ? this.props.clients.map(v => <div className='provider-client' onClick={() => this.setClient(v.id)} key={v.id}>{v.name}</div>) : null

        return (
            <div>
                <button >Back</button>
                {info}
                {clients && !this.props.selectedClient ? clients : null}
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    isProvider: reduxState.userReducer.isProvider,
    selectedClient: reduxState.userReducer.selectedClient,
    userInfo: reduxState.userReducer.userInfo
})

export default connect(mapStateToProps, {getUserInfo, getClients, setClient, clearClient})(withRouter(Dashboard))

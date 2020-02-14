import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getUserInfo} from '../../redux/reducers/userReducer';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
                 
        }
    }

    componentDidMount() {
        if(this.props.selectedClient) {
            this.props.getUserInfo(this.props.selectedClient)
        }
    }

    render() {
        const info = (!this.props.selectedClient ?
            <div>
                {this.props.userInfo.keys().map(v => {
                    return <span><h1>{v}: </h1>this.props.userInfo[v]</span>
                })}
            </div>
        )
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    selectedClient: reduxState.userReducer.selectedClient,
    userInfo: reduxState.userReducer.userInfo
})

export default connect(mapStateToProps, {getUserInfo})(Dashboard)

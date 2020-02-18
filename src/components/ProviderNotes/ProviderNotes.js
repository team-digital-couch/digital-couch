import React from 'react';
import { connect } from 'react-redux';
import {getProviderNotes} from '../../redux/reducers/providerNotesReducer';
import {getMe} from '../../redux/reducers/userReducer';

class ProviderNotes extends React.Component{
    constructor(){
        super()
        this.state = {}
    }

    componentDidMount(){
        this.props.getProviderNotes();
        this.props.getMe();
    }

    render(){
        return(
            <div>Provider Notes</div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return{
        provider_Notes: reduxState.providerNotesReducer.provider_Notes
    }
}

export default connect(mapStateToProps, {getProviderNotes, getMe})(ProviderNotes);
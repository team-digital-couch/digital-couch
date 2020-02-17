import React from 'react';
import { connect } from 'react-redux';
import {getProviderNotes} from '../../redux/reducers/providerNotesReducer'

class ProviderNotes extends React.Component{
    constructor(){
        super()
        this.state = {}
    }

    componentDidMount(){
        this.props.getProviderNotes();
    }

    render(){
        return(
            <div>Provider Notes</div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return{
        content: reduxState.providerNotesReducer.content
    }
}

export default connect(mapStateToProps, {getProviderNotes})(ProviderNotes);
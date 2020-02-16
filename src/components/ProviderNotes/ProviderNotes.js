import React from 'react';
import { connect } from 'react-redux';

class ProviderNotes extends React.Component{
    constructor(){
        super()
        this.state = {}
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

export default connect(mapStateToProps)(ProviderNotes);
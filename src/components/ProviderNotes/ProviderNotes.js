import React from 'react';
import { connect } from 'react-redux';
import {getProviderNotes, addProviderNotes, deleteProviderNotes} from '../../redux/reducers/providerNotesReducer';
import {getMe} from '../../redux/reducers/userReducer';

class ProviderNotes extends React.Component{
    constructor(){
        super()
        this.state = {}
    }

    componentDidMount(){
        this.props.getMe();
        this.props.getProviderNotes();
    }

    deleteProviderNotes(){
        this.props.deleteProviderNotes();
    }

    render(){
        return(
            {this.props.provider_notes.map(note =>{
                return(
                    <section id='provider_notes'>
                <div>{note.content}</div>
            </section>
                )
            })}
        )
    }
}

const mapStateToProps = (reduxState) => {
    return{
        provider_notes: reduxState.providerNotesReducer.provider_notes
    }
}

export default connect(mapStateToProps, {getProviderNotes, addProviderNotes, deleteProviderNotes, getMe})(ProviderNotes);
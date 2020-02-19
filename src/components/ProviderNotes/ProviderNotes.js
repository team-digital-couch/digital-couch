import React from 'react';
import { connect } from 'react-redux';
import {getProviderNotes, addProviderNotes, deleteProviderNotes} from '../../redux/reducers/providerNotesReducer';
import {getMe} from '../../redux/reducers/userReducer';
import './ProviderNotes.css'

class ProviderNotes extends React.Component{
    constructor(){
        super()
        this.state = {}
    }

    componentDidMount(){
        // this.props.getMe();
        this.props.getProviderNotes(this.props.selectedClient);
    }

    deleteProviderNotes(id){
        this.props.deleteProviderNotes(id);
    }

    render(){
        console.log(this.props.providerNotes)
        return(
            <div>
                <div id='all-notes'>{this.props.providerNotes.map(notes => {
                    return(
                        <div className='note-container' key={notes.id}>
                            <button onClick={() => this.deleteProviderNotes(notes.id)}>X</button>
                            <section className='note-content' key={notes.content}>{notes.content}</section>
                        </div>
                    )
                })}</div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return{
        providerNotes: reduxState.providerNotesReducer.providerNotes,
        isProvider: reduxState.userReducer.isProvider,
        selectedClient: reduxState.userReducer.selectedClient
    }
}

export default connect(mapStateToProps, {getProviderNotes, addProviderNotes, deleteProviderNotes, getMe})(ProviderNotes);
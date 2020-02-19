import React from 'react';
import { connect } from 'react-redux';
import {getProviderNotes, addProviderNotes, deleteProviderNotes} from '../../redux/reducers/providerNotesReducer';
import {getMe} from '../../redux/reducers/userReducer';
import {toast} from 'react-toastify';
import './ProviderNotes.css';

class ProviderNotes extends React.Component{
    constructor(){
        super()
        this.state = {
            content: ''
        }
    }

    componentDidMount(){
        // this.props.getMe();
        this.props.getProviderNotes(this.props.selectedClient);
    }

    deleteProviderNotes(id){
        this.props.deleteProviderNotes(id);
    }

    inputChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    addProviderNotes = () => {
        const newNote = {
            clientId: this.props.selectedClient,
            time: new Date(),
            content: this.state.content
        }
        this.props.addProviderNotes(newNote)
        // alert('New Note added')
        toast.error('New Note Added')
    }

    render(){
        console.log(this.props.selectedClient)
        return(
            <div>
                <section>Add Provider Note</section>
                <textarea name='content' placeholder='Add a new Note' onChange={this.inputChange}></textarea>
                <button onClick={this.addProviderNotes}>Add</button>
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
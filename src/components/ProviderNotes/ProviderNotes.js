import React from 'react';
import { connect } from 'react-redux';
import {getProviderNotes, addProviderNotes, deleteProviderNotes} from '../../redux/reducers/providerNotesReducer';
import {getMe} from '../../redux/reducers/userReducer';
import {toast} from 'react-toastify';
import './ProviderNotes.css';

export class ProviderNotes extends React.Component{
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
        toast.success('New Note Added')
    }

    render(){
        // console.log(this.props.selectedClient)
        return(
            <div>
                <section className='page-title'>Provider Notes</section>
                <h1 className='provider-notes-subtitle'>{this.props.username}'s Notes for {this.props.client_name}</h1>
                <textarea name='content' placeholder='Add a new Note' onChange={this.inputChange}></textarea>
                <button onClick={this.addProviderNotes}>Add</button>
                <div id='all-notes'>{this.props.providerNotes.map(notes => {
                    return(
                        <div className='note-container' key={notes.id}>
                            <button onClick={() => this.deleteProviderNotes(notes.id)}>X</button>
                            <section className='note-content' >{notes.content}</section>
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
        selectedClient: reduxState.userReducer.selectedClient,
        username: reduxState.userReducer.username,
        client_name: reduxState.userReducer.info.username
    }
}

export default connect(mapStateToProps, {getProviderNotes, addProviderNotes, deleteProviderNotes, getMe})(ProviderNotes);
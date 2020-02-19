import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {addJournal, getJournals} from '../../redux/reducers/journalReducer';
import {toast} from 'react-toastify';
import {getMe} from '../../redux/reducers/userReducer';
import './AddJournal.css';

class AddJournal extends React.Component{
    constructor(){
        super()
        this.state = {
            title: '',
            content: '',
            // id: 2
        }
    }

    inputChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    addJournal = () => {
        const calendarEvent = {
            start: new Date(),
            end: new Date(),
            title: this.state.title,
            id: this.props.userId
        }

        const dbEvent = {
            //need to get user_id off of session
            user_id: this.props.userId,
            start_date: new Date(),
            end_date: new Date(),
            content: this.state.content,
            title: this.state.title
        }

        this.props.events.push(calendarEvent);
        this.props.addJournal(dbEvent);
        // this.setState({id: this.state.id +=1});
        console.log(typeof this.props.userId)
        toast.error('New Journal Entry Added')
    }

    render(){
        return(
            <div id='addJournal_component'>
                <Link to='/journal'>Back</Link>
                <input name='title' placeholder='title' onChange={this.inputChange}/>
                <textarea id='content' name='content' placeholder='How are you feeling?' onChange={this.inputChange}></textarea>
                <button onClick={this.addJournal}>Add Journal</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return{
        events: reduxState.journalReducer.events,
        userId: reduxState.userReducer.userId
    }
}


export default connect (mapStateToProps, {addJournal, getJournals, getMe})(AddJournal);
import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {addJournal, getJournals} from '../../redux/reducers/journalReducer';

class AddJournal extends React.Component{
    constructor(){
        super()
        this.state = {
            title: '',
            content: '',
            id: 2
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
            id: this.state.id
        }

        const dbEvent = {
            //need to get user_id off of session
            user_id: 1,
            start_date: new Date(),
            end_date: new Date(),
            content: this.state.content,
            title: this.state.title
        }

        this.props.events.push(calendarEvent);
        this.props.addJournal(dbEvent);
        this.state.id +=1;
        // console.log(this.props.events);
    }

    render(){
        return(
            <div>
                <Link to='/journal'>Back</Link>
                <input name='title' placeholder='title' onChange={this.inputChange}/>
                <textarea name='content' placeholder='How are you feeling?' onChange={this.inputChange}></textarea>
                <button onClick={this.addJournal}>Add Journal</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return{
        events: reduxState.journalReducer.events,
        newJournal: reduxState.journalReducer.newJournal
    }
}


export default connect (mapStateToProps, {addJournal, getJournals})(AddJournal);
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import {getJournal, getJournals, deleteJournal} from '../../redux/reducers/journalReducer';
import {getMe} from '../../redux/reducers/userReducer';
import "./Journal.css";

const localizer = momentLocalizer(moment);

class Journal extends React.Component{
    constructor(){
        super()
        this.state = {
            journalId: 1
        }
    }

    componentDidMount(){
        // this.props.getJournals();
        this.props.getJournals(this.props.userId);
        this.props.getMe();
    }

    deleteJournal(id){
        this.props.deleteJournal(id)
    }

    clickJournal = (event) => {
        this.setState({journalId: event.id})
        console.log(this.state.journalId)
      }

    render(){
        console.log(this.props.journals)
        let journalId = this.state.journalId;
        let filteredJournal = this.props.journals.filter(journal => journal.id == journalId).map(journal => {
            return(
                <section>
                    <div id='journal_title_date'>
                        <h1>{journal.title}</h1>
                        <h1>{journal.start}</h1>
                        <button onClick={() => this.deleteJournal(journal.id)}>X</button>
                    </div>
                    <h2>{journal.content}</h2>
                </section>
            )
        });
        return(
            <div id='journal_component'>
                <section id='calendar_section'>
                    <Calendar
                        localizer={localizer}
                        defaultDate={new Date()}
                        defaultView="month"
                        events={this.props.events}
                        onSelectEvent={this.clickJournal}
                    />
                    <Link to='/addJournal'>Add a new Journal entry</Link>
                </section>
                <section id='journal_display'>
                    <div id='journal_title_date'>
                        <h1>{filteredJournal[0]}</h1>
                        {/* <h1>{filteredJournal}</h1> */}
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return{
        journal: reduxState.journalReducer.journal,
        journals: reduxState.journalReducer.journals,
        events: reduxState.journalReducer.events,
        userId: reduxState.userReducer.userId
    }
}

export default connect(mapStateToProps, {getJournal, getJournals, deleteJournal, getMe})(Journal);

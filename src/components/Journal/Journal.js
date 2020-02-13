import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Journal.css";
import {getJournal, addJournal, editJournal, deleteJournal} from '../../redux/reducers/journalReducer';

const localizer = momentLocalizer(moment);

class Journal extends React.Component{
    constructor(){
        super()
        this.state = {
            clickedId: null
            // events: [
            //     {
            //       start: new Date(),
            //       end: new Date(),
            //       title: "Some title",
            //       id: null
            //     }
            //   ]
        }
    }

    // componentDidUpdate(prevProps, prevState){
    //     if(this.props.journal  !== prevState.journal){
    //         this.getJournal()
    //     }
    // }

    // checkState = (e) => {
    //     this.setState({[this.state.events[0].id]: e.target.value})
    //     this.setState({
    //         events: [...this.state.events.filter(v => v.id == ), {}]
    //     })
    // }

    // clickJournal = () => {
        
    //   }

    render(){
        console.log(this.props.events)
        return(
            <div>
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
                        <h1>Title</h1>
                        <h1>Date</h1>
                    </div>
                    <h2>Content</h2>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return{
        journal: reduxState.journalReducer.journal,
        events: reduxState.journalReducer.events
    }
}

export default connect(mapStateToProps, {getJournal})(Journal);

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Journal.css";
import {getJournal, getJournals} from '../../redux/reducers/journalReducer';

const localizer = momentLocalizer(moment);

class Journal extends React.Component{
    constructor(){
        super()
        this.state = {
            journalId: 0
        }
    }

    componentDidMount(){
        this.props.getJournals();
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

    clickJournal = (event) => {
        this.setState({journalId: event.id})
        // console.log(this.state.journalIndex)
      }

    render(){
        console.log(this.props.journals)
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
                {this.props.journals.map(map => {
                    return(
                        <section id='journal_display'>
                            <div id='journal_title_date'>
                                <h1>{map.title}</h1>
                                <h1>{map.start}</h1>
                            </div>
                            <h2>{map.content}</h2>
                        </section>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return{
        journal: reduxState.journalReducer.journal,
        journals: reduxState.journalReducer.journals,
        events: reduxState.journalReducer.events
    }
}

export default connect(mapStateToProps, {getJournal, getJournals})(Journal);

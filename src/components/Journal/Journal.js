import React from 'react';
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
            events: [
                {
                  start: new Date(),
                  end: new Date(),
                  title: "Some title"
                }
              ]
        }
    }

    componentDidMount(){

    }

    getJournal = () => {
        alert("DON'T TOUCH ME!!!")
      }

    render(){
        return(
            <div>
                <section id='calendar_section'>
                    <Calendar
                        localizer={localizer}
                        defaultDate={new Date()}
                        defaultView="month"
                        events={this.state.events}
                        onSelectEvent={this.getJournal}
                    />
                </section>
                <section>
                    <div>
                        <h1>Title</h1>
                        <h1>Date</h1>
                    </div>
                    <div>Content</div>
                </section>
            </div>
        )
    }
}

export default Journal;
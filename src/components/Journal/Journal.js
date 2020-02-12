import React from 'react';
import moment from 'moment';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class Journal extends React.Component{
    constructor(){
        super()
        this.state = {
            events: [
                {
                  start: new Date(),
                  end: new Date(moment()),
                  title: "Some title"
                }
              ]
        }
    }

    getJournal = () => {
        alert("DON'T TOUCH ME!!!")
      }

    render(){
        return(
            <div>
                <Calendar
                    localizer={localizer}
                    defaultDate={new Date()}
                    defaultView="month"
                    events={this.state.events}
                    onSelectEvent={this.getJournal}
                    style={{ height: "100vh" }}
                />
            </div>
        )
    }
}

export default Journal;
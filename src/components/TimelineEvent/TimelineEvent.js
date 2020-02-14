import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deleteEvent} from '../../redux/reducers/timelineReducer'

class TimelineEvent extends Component {
    edit = () => {}

    delete = () => {
        const result = window.confirm('Are you sure you want to delete this event?')
        if(result) {
            this.props.delete()
        }
    }
    
    render() {
        return (
            <div className='event-container'>
                {this.props.events.map(v => (
                    <div key={v.id}>
                        <div className='event-delete-container'>
                            <span className='event-delete-button' onClick={this.delete}>X</span>
                        </div>
                        <span>Date: {v.isApproximate ? 'Approximately ' : ''}{v.date}</span>
                        <span>Title: {v.title}</span>
                        <span>What happened:</span>
                        <p>{v.content}</p>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                ))}
            </div>
        )
    }
}

const checkout = state => ({
    isProvider: state.userReducer.isProvider,
    events: state.timelineReducer.events
})

export default connect(checkout, {deleteEvent})(TimelineEvent)
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deleteEvent} from '../../redux/reducers/timelineReducer'
import AddTimelineEvent from '../AddTimelineEvent/AddTimelineEvent'

class TimelineEvent extends Component {
    constructor() {
        super()

        this.state = {
            showForm: false
        }
    }

    componentDidUpdate() {
        console.log(this.props.events)
    }

    edit = () => {}

    delete = id => {
        const result = window.confirm('Are you sure you want to delete this event?')
        if(result) {
            this.props.deleteEvent(id)
        }
    }

    showHide = () => {
        this.setState({showForm: !this.state.showForm})
    }
    
    render() {
        return (
            <div className='event-container'>
                {this.props.events.map(v => (
                    <div key={v.id}>
                        <div className='event-delete-container'>
                            <span className='event-delete-button' onClick={() => this.delete(v.id)}>X</span>
                        </div>
                        <span>Date: {v.isApproximate ? 'Approximately ' : ''}{v.time}</span>
                        <span>Title: {v.title}</span>
                        <span>What happened:</span>
                        <p>{v.content}</p>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                ))}
                <button onClick={this.showHide}>Add New</button>
                {this.state.showForm && <AddTimelineEvent timelineId={this.props.timelineId} />}
            </div>
        )
    }
}

const checkout = state => {
    console.log(state)
    return ({
    isProvider: state.userReducer.isProvider,
    events: state.timelineReducer.events
})}

export default connect(checkout, {deleteEvent})(TimelineEvent)